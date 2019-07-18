import { basename, relative, resolve } from "path";
import createSimpleGit, { SimpleGit } from "simple-git/promise";
import { commands, extensions, window } from "vscode";
import { IProfile } from "../models/profile.model";
import { ISettings } from "../models/settings.model";
import { state } from "../models/state.model";
import { ISyncService } from "../models/sync.model";
import { PragmaService } from "./pragma.service";

export class RepoService implements ISyncService {
  private git: SimpleGit;

  constructor() {
    this.git = createSimpleGit(state.env.locations.repoFolder).silent(true);
  }

  public async init() {
    const folderExists = await state.fs.exists(state.env.locations.repoFolder);

    if (!folderExists) {
      await state.fs.mkdir(state.env.locations.repoFolder);
    }

    const isRepo = await this.git.checkIsRepo();

    if (!isRepo) {
      this.git.init();
    }

    const remotes = await this.git.getRemotes(true);
    const origin = remotes.filter(remote => remote.name === "origin")[0];

    const settings = await state.settings.getSettings();

    if (!origin) {
      this.git.addRemote("origin", settings.repo.url);
    } else if (origin.refs.push !== settings.repo.url) {
      await this.git.removeRemote("origin");
      this.git.addRemote("origin", settings.repo.url);
    }

    const gitignorePath = resolve(state.env.locations.repoFolder, ".gitignore");
    const gitignoreExists = await state.fs.exists(gitignorePath);
    if (!gitignoreExists) {
      await state.fs.write(gitignorePath, settings.ignoredItems.join("\n"));
    } else {
      const contents = await state.fs.read(gitignorePath);
      const lines = contents.split("\n");
      let hasChanged = false;
      settings.ignoredItems.forEach(val => {
        if (!lines.includes(val)) {
          lines.push(val);
          hasChanged = true;
        }
      });
      if (hasChanged) {
        await state.fs.write(gitignorePath, lines.join("\n"));
      }
    }
  }

  public async sync(): Promise<void> {
    const configured = await this.isConfigured();
    if (!configured) {
      state.webview.openLandingPage();
      return;
    }

    window.setStatusBarMessage(state.localize("info(sync).syncing"));

    await this.init();

    await this.copyFilesToRepo();

    const [uploadDiff, , profile] = await Promise.all([
      this.git.diff(),
      this.git.fetch(),
      this.getProfile()
    ]);

    if (uploadDiff) {
      await this.upload();
    }

    const downloadDiff = await this.git.diff([`origin/${profile.branch}`]);
    if (downloadDiff) {
      await this.download();
    }
  }

  public async upload(): Promise<void> {
    state.watcher.stopWatching();

    const configured = await this.isConfigured();
    if (!configured) {
      state.webview.openLandingPage();
      return;
    }

    await this.init();

    window.setStatusBarMessage(state.localize("info(upload).uploading"), 2000);

    const installedExtensions = extensions.all
      .filter(ext => !ext.packageJSON.isBuiltin)
      .map(ext => ext.id);

    await state.fs.write(
      resolve(state.env.locations.repoFolder, "extensions.json"),
      JSON.stringify(installedExtensions, null, 2)
    );

    const profile = await this.getProfile();

    const branches = await this.git.branchLocal();

    if (!branches.all.includes(profile.branch)) {
      await this.git.checkoutLocalBranch(profile.branch);
    }

    await this.copyFilesToRepo();

    await this.git.add(".");

    await this.git.commit(`Update [${new Date().toLocaleString()}]`);

    await this.git.push("origin", profile.branch, {
      "--force": null
    });

    window.setStatusBarMessage(state.localize("info(upload).uploaded"), 2000);

    const settings = await state.settings.getSettings();

    if (settings.watchSettings) {
      state.watcher.startWatching();
    }
  }

  public async download(): Promise<void> {
    state.watcher.stopWatching();

    const configured = await this.isConfigured();
    if (!configured) {
      state.webview.openLandingPage();
      return;
    }

    await this.init();

    window.setStatusBarMessage(
      state.localize("info(download).downloading"),
      2000
    );

    const profile = await this.getProfile();

    await this.git.reset("hard");

    const branches = await this.git.branchLocal();

    if (branches.current !== profile.branch) {
      await this.git.deleteLocalBranch(profile.branch);
      await this.git.checkoutBranch(profile.branch, `origin/${profile.branch}`);
    }

    await this.git.pull("origin", profile.branch, {
      "--force": null
    });

    const settings = await state.settings.getSettings();

    await this.copyFilesFromRepo(settings);

    try {
      const extensionsFromFile = JSON.parse(
        await state.fs.read(
          resolve(state.env.locations.repoFolder, "extensions.json")
        )
      );

      const toInstall = state.extensions.getMissingExtensions(
        extensionsFromFile
      );

      await Promise.all(
        toInstall.map(ext => state.extensions.installExtension(ext))
      );

      if (settings.removeExtensions) {
        const toDelete = state.extensions.getUnneededExtensions(
          extensionsFromFile
        );

        const needToReload = toDelete.some(
          ext => extensions.getExtension(ext).isActive
        );

        await Promise.all(
          toDelete.map(ext => state.extensions.uninstallExtension(ext))
        );

        if (needToReload) {
          const yes = state.localize("btn(yes)");
          const result = await window.showInformationMessage(
            state.localize("info(download).needToReload"),
            yes
          );
          if (result === yes) {
            commands.executeCommand("workbench.action.reloadWindow");
          }
        }
      }
    } catch (err) {
      throw err;
    }

    window.setStatusBarMessage(
      state.localize("info(download).downloaded"),
      2000
    );

    if (settings.watchSettings) {
      state.watcher.startWatching();
    }
  }

  public async isConfigured(): Promise<boolean> {
    const settings = await state.settings.getSettings();
    return (
      !!settings.repo.url &&
      !!settings.repo.currentProfile &&
      settings.repo.profiles.filter(
        profile => profile.name === settings.repo.currentProfile
      ).length === 1
    );
  }

  public async reset(): Promise<void> {
    window.showInformationMessage(state.localize("info(reset).resetComplete"));
  }

  private async getProfile(): Promise<IProfile> {
    const settings = await state.settings.getSettings();
    const currentProfile = settings.repo.profiles.filter(
      profile => profile.name === settings.repo.currentProfile
    )[0];

    return currentProfile ? currentProfile : settings.repo.profiles[0];
  }

  private async copyFilesToRepo(): Promise<void> {
    const files = await state.fs.listFiles(state.env.locations.userFolder);

    const filesToPragma = ["settings.json", "keybindings.json"];

    await Promise.all(
      files.map(async file => {
        const contents = await state.fs.read(file);
        const newPath = resolve(
          state.env.locations.repoFolder,
          relative(state.env.locations.userFolder, file)
        );

        if (filesToPragma.includes(basename(file))) {
          return state.fs.write(
            newPath,
            await PragmaService.processBeforeUpload(contents)
          );
        }

        return state.fs.write(newPath, contents);
      })
    );
  }

  private async copyFilesFromRepo(settings: ISettings): Promise<void> {
    const files = await state.fs.listFiles(state.env.locations.repoFolder);

    const filesToPragma = ["settings.json", "keybindings.json"];

    await Promise.all(
      files.map(async file => {
        const contents = await state.fs.read(file);
        const newPath = resolve(
          state.env.locations.userFolder,
          relative(state.env.locations.repoFolder, file)
        );
        const currentContents = await state.fs.read(newPath);

        if (filesToPragma.includes(basename(file))) {
          const afterPragma = PragmaService.processBeforeWrite(
            currentContents,
            contents,
            settings.hostname
          );
          if (currentContents !== afterPragma) {
            return state.fs.write(newPath, afterPragma);
          }
          return;
        }

        if (currentContents !== contents) {
          return state.fs.write(newPath, contents);
        }
      })
    );
  }
}

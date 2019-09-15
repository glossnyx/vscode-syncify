import { basename, relative, resolve } from "path";
import { commands, extensions, window } from "vscode";
import { ISettings, ISyncer, state } from "~/models";
import {
  Environment,
  Extensions,
  FS,
  localize,
  Pragma,
  Settings,
  Webview
} from "~/services";

export class FileSyncer implements ISyncer {
  public async sync(): Promise<void> {
    window.showInformationMessage(
      "Syncify: Sync is not available for File Syncer yet"
    );
  }

  public async upload(): Promise<void> {
    state.watcher.stopWatching();

    const configured = await this.isConfigured();
    if (!configured) {
      Webview.openLandingPage();
      return;
    }

    const settings = await Settings.get();

    window.setStatusBarMessage(localize("(info) upload.uploading"), 2000);

    const installedExtensions = extensions.all
      .filter(ext => !ext.packageJSON.isBuiltin)
      .map(ext => ext.id);

    await FS.write(
      resolve(settings.file.path, "extensions.json"),
      JSON.stringify(installedExtensions, null, 2)
    );

    await this.copyFilesToPath(settings);

    window.setStatusBarMessage(localize("(info) upload.uploaded"), 2000);

    if (settings.watchSettings) {
      await state.watcher.startWatching();
    }
  }

  public async download(): Promise<void> {
    state.watcher.stopWatching();

    const configured = await this.isConfigured();
    if (!configured) {
      Webview.openLandingPage();
      return;
    }

    window.setStatusBarMessage(localize("(info) download.downloading"), 2000);

    const settings = await Settings.get();

    await this.copyFilesFromPath(settings);

    try {
      const extensionsFromFile = await (async () => {
        const extensionsExist = await FS.exists(
          resolve(settings.file.path, "extensions.json")
        );
        if (!extensionsExist) {
          return [];
        }
        return JSON.parse(
          await FS.read(resolve(settings.file.path, "extensions.json"))
        );
      })();

      await Extensions.install(...Extensions.getMissing(extensionsFromFile));

      if (settings.removeExtensions) {
        const toDelete = Extensions.getUnneeded(extensionsFromFile);

        if (toDelete.length) {
          const needToReload = toDelete.some(
            ext => extensions.getExtension(ext).isActive
          );

          await Extensions.uninstall(...toDelete);

          if (needToReload) {
            const yes = localize("(btn) yes");
            const result = await window.showInformationMessage(
              localize("(info) download.needToReload"),
              yes
            );
            if (result === yes) {
              commands.executeCommand("workbench.action.reloadWindow");
            }
          }
        }
      }
    } catch (err) {
      throw err;
    }

    window.setStatusBarMessage(localize("(info) download.downloaded"), 2000);

    if (settings.watchSettings) {
      await state.watcher.startWatching();
    }
  }

  public async isConfigured(): Promise<boolean> {
    const settings = await Settings.get();

    if (!settings.file.path) {
      return false;
    }

    const folderExists = await FS.exists(settings.file.path);
    if (!folderExists) {
      await FS.mkdir(settings.file.path);
    }

    return true;
  }

  public async reset(): Promise<void> {
    // Add file-specific reset logic
  }

  private async copyFilesToPath(settings: ISettings): Promise<void> {
    const files = await FS.listFiles(Environment.userFolder);

    const filesToPragma = ["settings.json", "keybindings.json"];

    await Promise.all(
      files.map(async file => {
        const contents = await FS.read(file);
        const newPath = resolve(
          settings.file.path,
          relative(Environment.userFolder, file)
        );

        if (filesToPragma.includes(basename(file))) {
          return FS.write(newPath, Pragma.processOutgoing(contents));
        }

        return FS.write(newPath, contents);
      })
    );
  }

  private async copyFilesFromPath(settings: ISettings): Promise<void> {
    const files = await FS.listFiles(settings.file.path);

    const filesToPragma = ["settings.json", "keybindings.json"];

    await Promise.all(
      files.map(async file => {
        const contents = await FS.read(file);
        const newPath = resolve(
          Environment.userFolder,
          relative(settings.file.path, file)
        );
        const currentContents = await (async () => {
          const exists = await FS.exists(newPath);
          if (exists) {
            return FS.read(newPath);
          }
          return "{}";
        })();

        if (filesToPragma.includes(basename(file))) {
          const afterPragma = Pragma.processIncoming(
            currentContents,
            contents,
            settings.hostname
          );
          if (currentContents !== afterPragma) {
            return FS.write(newPath, afterPragma);
          }
          return;
        }

        if (currentContents !== contents) {
          return FS.write(newPath, contents);
        }
      })
    );
  }
}
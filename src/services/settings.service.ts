import merge from "lodash/merge";
import { ViewColumn, window, workspace } from "vscode";
import { defaultSettings, ISettings } from "../models/settings.model";
import { state } from "../models/state.model";

export class SettingsService {
  public async getSettings(): Promise<ISettings> {
    const filepath = state.env.locations.settings;
    const exists = await state.fs.exists(filepath);
    if (!exists) {
      await this.setSettings(defaultSettings);
      return defaultSettings;
    }

    try {
      const settings = JSON.parse(await state.fs.read(filepath));
      const newSettings: ISettings = merge(defaultSettings, settings);

      if (JSON.stringify(newSettings) !== JSON.stringify(settings)) {
        await this.setSettings(settings);
      }

      return newSettings;
    } catch (err) {
      throw new Error(err);
    }
  }

  public async setSettings(settings: ISettings): Promise<void> {
    const exists = await state.fs.exists(state.context.globalStoragePath);
    if (!exists) {
      await state.fs.mkdir(state.context.globalStoragePath);
    }

    const filepath = state.env.locations.settings;

    await state.fs.write(
      filepath,
      JSON.stringify(merge(defaultSettings, settings), null, 2)
    );
  }

  public async openSettings() {
    state.webview.openSettingsPage(await this.getSettings());
  }

  public async openSettingsFile() {
    const filepath = state.env.locations.settings;
    await window.showTextDocument(
      await workspace.openTextDocument(filepath),
      ViewColumn.One,
      true
    );
  }

  public async resetSettings(): Promise<void> {
    state.watcher.stopWatching();

    await state.fs.delete(state.context.globalStoragePath);

    await state.sync.reset();

    if (defaultSettings.watchSettings) {
      state.watcher.startWatching();
    }

    window.showInformationMessage(state.localize("info(reset).resetComplete"));
  }
}

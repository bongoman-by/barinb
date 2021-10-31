import { Injectable } from '@angular/core';

import { Config } from './config.interface';

export const CONFIG_DEFAULT: Config = {
  googleMapKey: 'AIzaSyCR6nb6hOLVWl00OtCHaQcQMgvtVqhs91E',
};

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private readonly config: Config;

  constructor() {
    this.config = {
      googleMapKey: CONFIG_DEFAULT.googleMapKey,
    };
  }

  getConfig(): Config {
    return this.config;
  }
}

import '@angular/compiler';
import { provideEventPlugins } from "@taiga-ui/event-plugins";
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {provideHttpClient, withFetch} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
      provideBrowserGlobalErrorListeners(),
      provideRouter(routes),
      provideEventPlugins(),
      provideHttpClient(withFetch()),
    ]
};

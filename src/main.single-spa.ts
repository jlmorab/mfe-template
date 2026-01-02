import { enableProdMode, getSingleSpaExtraProviders, singleSpaAngular } from 'single-spa-angular';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { App } from './app/app';
import { NgZone } from '@angular/core';

if (environment.production) {
  enableProdMode();
}

const lifecycles = singleSpaAngular({
  bootstrapFunction: () =>
    bootstrapApplication(App, {
      providers: [...appConfig.providers, getSingleSpaExtraProviders(), provideRouter(routes)],
    }),
  template: '<app-root />',
  NgZone: NgZone,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;

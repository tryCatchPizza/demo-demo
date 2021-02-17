import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MicroFrontendModule } from './app/microfrontend/microfrontend.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(MicroFrontendModule)
  .catch(err => console.error(err));

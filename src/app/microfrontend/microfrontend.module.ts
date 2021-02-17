import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CacheService, TokenService } from '@sauter/cloud-theme-components-lib';

// Services

// Modules
import { MicroFrontendRoutingModule } from './microfrontend-routing.module';

// Components
import { MicroFrontendComponent } from './microfrontend.component';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    MicroFrontendComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MicroFrontendRoutingModule,
    HttpClientModule
  ],
  providers: [
    CacheService,
    TokenService,
  ],
  bootstrap: [MicroFrontendComponent]
})
export class MicroFrontendModule { }

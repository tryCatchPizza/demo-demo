import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { Modulo6ThemeComponentsLibModule } from '@sauter/modulo6-theme-components-lib';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    Modulo6ThemeComponentsLibModule
  ],
  providers: []
})
export class AppModule { }

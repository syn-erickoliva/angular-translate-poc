import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {HttpModule, Http} from "@angular/http";
import {TranslateModule, TranslateStaticLoader,TranslateLoader} from "ng2-translate";


export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}


@NgModule({
  imports: [
      BrowserModule,
      HttpModule,
      TranslateModule.forRoot({
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
    })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})


export class AppModule {
}

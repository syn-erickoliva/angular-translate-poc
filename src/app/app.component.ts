import { Component } from '@angular/core';
import {TranslateService} from 'ng2-translate';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Translate Prove of Concept';
  param = {value: 'world'};


  // constructor(translate: TranslateService) {
  //     // this language will be used as a fallback when a translation isn't found in the current language
  //     translate.setDefaultLang('en');

  //      // the lang to use, if the lang isn't available, it will use the current loader to get them
  //     translate.use('en');


      constructor(private translate: TranslateService) {
        translate.addLangs(["en", "es"]);
        translate.setDefaultLang('en');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
    }
  }
}



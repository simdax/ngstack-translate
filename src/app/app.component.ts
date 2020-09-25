import { Component } from '@angular/core';
import { TranslateService } from '@ngstack/translate';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor(private translate: TranslateService) {}

  changeLang(lang: string) {
    this.translate.activeLang = lang;
  }
  
}

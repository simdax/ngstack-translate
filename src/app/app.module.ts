import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngstack/translate';

export function setupTranslateFactory(service: TranslateService): Function {
  return () => service.use('en');
}

@NgModule({
  imports: [
    BrowserModule, FormsModule, 
    HttpClientModule,
    TranslateModule.forRoot()
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(translate: TranslateService) {
    // en
    translate.use('en', {
      'TITLE': 'Hello from @ngstack/translate!',
      'HTML': '<b>HTML</b> in the <strong>translation</strong> example!',
      'SOME': {
        'PROPERTY': {
          'PATH': 'Hello from sub-property!'
        }
      },
      "FORMATTED": {
        "HELLO_MESSAGE": "Hello, {username}!"
      }
    });
    // fr
    translate.use('fr', {
      'TITLE': '[fr] Hello from @ngstack/translate!',
      'HTML': '[fr] <b>HTML</b> in the <strong>translation</strong> example!',
      'SOME': {
        'PROPERTY': {
          'PATH': '[fr] Hello from sub-property!'
        }
      },
      "FORMATTED": {
        "HELLO_MESSAGE": "[fr] Hello, {username}!"
      }
    });
  }
}

import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Alhares';
  constructor(translate: TranslateService ) {
    translate.addLangs(['en','ar']);
    translate.setDefaultLang('ar');
    translate.use('ar');
  }
}

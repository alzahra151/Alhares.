import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  lang:String='ar'
  constructor(public translate: TranslateService, public language:LanguageService){}
ngOnInit(){
  this.language.languge.subscribe(()=>{
    console.log( this.language.languge.value)
    this.lang=this.language.languge.value
   })
}
}

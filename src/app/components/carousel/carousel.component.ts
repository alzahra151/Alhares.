import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit{
  lang :String='ar'
constructor(public translate: TranslateService, public language:LanguageService){ }
  ngOnInit(): void {
    
    this.language.languge.subscribe(()=>{
      console.log( this.language.languge.value)
      this.lang=this.language.languge.value
     })
  }
}

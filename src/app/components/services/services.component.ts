import { Component, ElementRef, OnInit, ViewChild ,Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import Typed from 'typed.js';
import { LanguageService } from 'src/app/services/language.service';
import * as $ from 'jquery';
import { TypeParams } from 'src/app/models/type-params';
// import { type } from 'jquery';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit{
lang:String='ar'

isOpen1=false; isOpen2=false; isOpen3=false; isOpen4=false; isOpen5=false; isOpen6=false;

 
  constructor(public translate: TranslateService, public language:LanguageService ,public eleRef:ElementRef){
  

  }
  typingText: string = "";
 

  ngOnInit(): void {
 
    this.language.languge.subscribe(()=>{
      console.log( this.language.languge.value)
      this.lang=this.language.languge.value
     })
  

  }

  onHover(id:number) {
    if (id==1){
    
      this.isOpen1=true; this.isOpen2=false; this.isOpen3=false; this.isOpen4=false; this.isOpen5=false; this.isOpen6=false;
    }
    else if (id==2){

     
        this.isOpen1=false; this.isOpen2=true; this.isOpen3=false; this.isOpen4=false; this.isOpen5=false; this.isOpen6=false;

    }
    else if (id==3){
        this.isOpen1=false; this.isOpen2=false; this.isOpen3=true; this.isOpen4=false; this.isOpen5=false; this.isOpen6=false;

    }
    else if (id==4){
   
   
      this.isOpen1=false; this.isOpen2=false; this.isOpen3=false; this.isOpen4=true; this.isOpen5=false; this.isOpen6=false;

    }
    else if (id==5){

      // this.container5.nativeElement.classList.add('servicecontainonhover');
      this.isOpen1=false; this.isOpen2=false; this.isOpen3=false; this.isOpen4=false; this.isOpen5=true; this.isOpen6=false;

    }
    else if (id==6){

      // this.container6.nativeElement.classList.add('servicecontainonhover');
      this.isOpen1=false; this.isOpen2=false; this.isOpen3=false; this.isOpen4=false; this.isOpen5=false; this.isOpen6=true;

    }
 
 

  }

}

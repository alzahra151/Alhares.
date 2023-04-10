import { Component, ElementRef, HostListener, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import  AOS from 'aos';
import * as $ from 'jquery';
import { LanguageService } from 'src/app/services/language.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
//  @ViewChild('nav') nav!:ElementRef;
 navbarVisible:Boolean = true;
  lang:String="ar"
  previousScrollPosition = 0;
  currentScrollPosition = 0;
  constructor( public translate: TranslateService, public language:LanguageService ,public elementref:ElementRef ,public renderer: Renderer2){}
  MenuIsopen = false;
 
  ngOnInit(): void {
    $(document).ready(function() {
      $('.navbar-toggler').click(function() {
        $('#overlay').fadeToggle();
      });
    });

    this.language.languge.subscribe(()=>{
     console.log( this.language.languge.value)
     this.lang=this.language.languge.value
    })
     
    
   
  }
 
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (this.currentScrollPosition > this.previousScrollPosition) {
      // Scrolling down
      this.navbarVisible = false;
      // this.nav.nativeElement.classList.remove('colorNave')
      // const nav = this.elementref.nativeElement.querySelector('#nav');
      // this.renderer.setStyle(nav, 'top', '-100px');
    } else {
      // Scrolling up
      this.navbarVisible = true;
      // this.nav.nativeElement.classList.add('colorNave')
      // const nav = this.elementref.nativeElement.querySelector('#nav');
      // this.renderer.setStyle(nav, 'top', '0px');
    }

    this.previousScrollPosition = this.currentScrollPosition;
  }
 

openMenu() {
  this.MenuIsopen=!this.MenuIsopen
}
swichLanguage(){
this.language.swichLang()
}
}


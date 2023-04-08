import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AskForServiceComponent } from './components/ask-for-service/ask-for-service.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { VisionComponent } from './components/vision/vision.component';
import { HomeComponent } from './components/home/home.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OtherServiceComponent } from './components/other-service/other-service.component';
import { ServicesComponent } from './components/services/services.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { VisionMissionComponent } from './components/vision-mission/vision-mission.component';
import { WorkDetailsComponent } from './components/work-details/work-details.component';
import { WorksComponent } from './components/works/works.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    AskForServiceComponent,
    CarouselComponent,
    ContactUsComponent,
    FooterComponent,
    VisionComponent,
    HomeComponent,
    LogoComponent,
    NavbarComponent,
    OtherServiceComponent,
    ServicesComponent,
    SpinnerComponent,
    VisionMissionComponent,
    WorkDetailsComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

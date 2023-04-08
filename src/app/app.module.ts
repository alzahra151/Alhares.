import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule ,TranslateLoader  } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OtherServiceComponent } from './components/other-service/other-service.component';
import { ServicesComponent } from './components/services/services.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { VisionMissionComponent } from './components/vision-mission/vision-mission.component';
import { WorkDetailsComponent } from './components/work-details/work-details.component';
import { WorksComponent } from './components/works/works.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { LoadingInterceptor } from './interceptors/loading.interceptor';

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
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      
      loader: {
        provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    
  }),
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
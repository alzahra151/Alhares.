import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WorkDetailsComponent } from './components/work-details/work-details.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [
  {path:"" ,component:HomeComponent},
  // {path:"work/:id" ,component:WorkDetailsComponent},
 { path: 'work/:id',
  loadChildren: () =>     import('./lazy-laoding/lazy-loading/lazy-loading.module')
    .then(m => m.LazyLoadingModule)},
  {path:"ContactUs" ,component:ContactUsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkDetailsComponent } from 'src/app/components/work-details/work-details.component';

const routes: Routes = [
  {
    path:'',component:WorkDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ManageavailabilityComponent } from './manageavailability/manageavailability.component';



const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full' },
  {path:'home',component:HomeComponent},
  {path:'dashboard',component:DashbordComponent},
  {path:'manage',component:ManageavailabilityComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

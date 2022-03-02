import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';


const routes: Routes = [
  {path:'sidenav',component:LeftSidebarComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommanRoutingModule { }

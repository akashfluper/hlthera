import { NgModule, Component, } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';





const routes: Routes = [
  {path: '', loadChildren:()=>import('./layout/layout.module').then(m=>m.LayoutModule)},
  {path: 'shared', loadChildren:()=>import('./shared/shared.module').then(s=>s.SharedModule)},
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  
  ]
})
export class AppRoutingModule { }

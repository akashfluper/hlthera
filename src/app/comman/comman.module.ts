import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommanRoutingModule } from './comman-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, LeftSidebarComponent, DashboardHeaderComponent],
  imports: [
    CommonModule,
    CommanRoutingModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LeftSidebarComponent,
    DashboardHeaderComponent,
  ]
})
export class CommanModule { 
 
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';

import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommanModule } from '../comman/comman.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ManageavailabilityComponent } from './manageavailability/manageavailability.component';

import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';

import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';



@NgModule({
  declarations: [HomeComponent, DashbordComponent, ManageavailabilityComponent],
  imports: [
    CommonModule,
    CommanModule,
    
    LayoutRoutingModule,
    CarouselModule,
    MatSelectModule,
    MatNativeDateModule,  
    MatDatepickerModule,
    MatOptionModule,
    MatInputModule,
    MatRadioModule,
    NgxMaterialTimepickerModule
   
    
    

    
    


    
  ]
})
export class LayoutModule { 
  
}

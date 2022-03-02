import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

interface service {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-manageavailability',
  templateUrl: './manageavailability.component.html',
  styleUrls: ['./manageavailability.component.css']
})

export class ManageavailabilityComponent implements OnInit {
  

  

  services:service[]=[
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ]


  constructor() { 
   
  }
 

  ngOnInit(): void {
  }
  

  


  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    nav: false,
    autoplay:true,
    autoplayTimeout:5000,

    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 10
      },
      740: {
        items: 18
      },
      940: {
        items: 18
      }
    },
   
  }

}




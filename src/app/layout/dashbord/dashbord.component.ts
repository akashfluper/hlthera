import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {Chart,BarElement,LineController, LineElement, PointElement, LinearScale, Title,CategoryScale, BarController} from 'node_modules/chart.js'




@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  constructor() { 
    Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale,BarElement, BarController);
  }

  ngOnInit(): void {
    const myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['', '', '', '', '', '','','','',''],
          datasets: [{
              label: '# of Votes',
              data: [12, 11, 3, 5, 2, 3,12, 19, 3, 5],
              backgroundColor: [
                  '#2B78C8',
                  
              ]
              ,barThickness:10,
              borderSkipped:false,
              borderRadius:10
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
              
          }
      }
  });
  

   
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
        items: 12
      },
      740: {
        items: 12
      },
      940: {
        items: 12
      }
    },
   
  }

}

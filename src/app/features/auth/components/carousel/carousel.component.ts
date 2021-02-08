import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'auth-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent {

  name = 'Angular ';
  
  images:string[] = [];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
    config.keyboard = true;
    config.pauseOnHover = true;
    this.images[0] = "https://limafoodreview.com/wp-content/uploads/2018/10/Bruschettas-Carnal-Prime-Steakhouse-by-LimaFoodReview_opt.jpg";
    this.images[1] = "https://limafoodreview.com/wp-content/uploads/2018/10/Chopped-Salad-Carnal-Prime-Steakhouse-by-LimaFoodReview_opt.jpg";
    this.images[2] = "https://limafoodreview.com/wp-content/uploads/2018/10/Papas-Trufadas-Carnal-Prime-Steakhouse-by-LimaFoodReview_opt.jpg";
  }

}

import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  ecommerce: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay:false,
    autoplaySpeed:1000,
    autoplayTimeout:7000,
    items:1,
    nav: false
  }
  batalMasar: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 900,
    autoplay:false,
    autoplaySpeed:2000,
    autoplayTimeout:5000,
    items:1,
    nav: false
  }
}

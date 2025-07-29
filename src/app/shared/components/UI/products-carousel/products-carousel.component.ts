import { Component, inject } from '@angular/core';

import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ProductsService } from '../../../../core/services/products/products.service';

@Component({
  selector: 'app-products-carousel',
  imports: [CarouselModule],
  templateUrl: './products-carousel.component.html',
  styleUrl: './products-carousel.component.scss',
})
export class ProductsCarouselComponent {
  readonly productsService = inject(ProductsService);

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    autoplayTimeout: 2000,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: false,
  };
}

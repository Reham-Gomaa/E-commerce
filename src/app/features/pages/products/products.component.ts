import { CurrencyPipe } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { ProductsService } from '../../../core/services/products/products.service';
import { ProductsCarouselComponent } from '../../../shared/components/UI/products-carousel/products-carousel.component';
import { SearchPipe } from '../../../shared/pipes/search.pipe';
import { SearchByNameComponent } from '../../../shared/components/business/search-by-name/search-by-name.component';
import { finalize } from 'rxjs';
import { SortComponent } from '../../../shared/components/business/sort/sort.component';
import { SortPipe } from '../../../shared/pipes/sort.pipe';

@Component({
  selector: 'app-products',
  imports: [
    CurrencyPipe,
    SearchPipe,
    SortPipe,
    RouterLink,
    ProductsCarouselComponent,
    SearchByNameComponent,
    SortComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);
  readonly productsService = inject(ProductsService);

  searchKey: string = '';
  currentSort: string = 'name-asc';

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productsService
      .getAllProducts()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res) => {
          this.productsService.allProducts = res;
        },
      });
  }

  sortProducts(sortType: string) {
    this.currentSort = sortType;
  }

  navigateToDetails(productId: number) {
    this.router.navigate(['/details', productId]);
  }
}

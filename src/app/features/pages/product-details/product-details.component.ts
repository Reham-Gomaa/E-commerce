import { Component, inject, OnInit, DestroyRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../../core/services/products/products.service';
import { Products } from '../../../core/interfaces/products.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly productsService = inject(ProductsService);
  private readonly destroyRef = inject(DestroyRef);

  productID!: string;
  id!: number;
  products!: Products[];

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (param) => {
        this.productID = param.get('p_id')!;
      },
    });

    this.id = +this.productID;

    this.productsService
      .getAllProducts()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res) => {
          this.products = res;
        },
      });
  }
}

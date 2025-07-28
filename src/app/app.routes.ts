import { Routes } from '@angular/router';
import { ProductsComponent } from './features/pages/products/products.component';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'home', component: ProductsComponent, title: 'Home' },
  {
    path: 'details/:p_id',
    loadComponent: () =>
      import('./features/pages/product-details/product-details.component').then(
        (c) => c.ProductDetailsComponent
      ),
    title: 'Product Details',
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./features/pages/cart/cart.component').then(
        (c) => c.CartComponent
      ),
    title: 'Cart',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/pages/not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
    title: 'Not Found',
  },
];

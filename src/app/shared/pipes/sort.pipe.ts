import { Pipe, PipeTransform } from '@angular/core';
import { Products } from '../../core/interfaces/products.interface';

@Pipe({
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(products: Products[], sortKey: string): Products[] {
    if (!products || !sortKey) return products;

    return [...products].sort((a, b) => {
      switch (sortKey) {
        case 'name-asc':
          return a.title.localeCompare(b.title);
        case 'name-desc':
          return b.title.localeCompare(a.title);
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        default:
          return 0;
      }
    });
  }
}

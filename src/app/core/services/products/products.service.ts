import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { ProductsEndpoints } from '../../enums/products.endpoints';
import { Products } from '../../interfaces/products.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly httpClient = inject(HttpClient);

  allProducts: Products[] = [] as Products[];

  getAllProducts(): Observable<Products[]> {
    return this.httpClient.get<Products[]>(
      environment.baseUrl + ProductsEndpoints.GET_ALL_PRODUCTS
    );
  }
}

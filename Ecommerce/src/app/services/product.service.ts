import { Injectable } from '@angular/core';

import { Product } from '../entities/product.entity';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ProductService {
    private productsURL = 'api/products';
    private products: Product[];

    constructor(private http: HttpClient) {}

    findAll(): Observable<Product[]> {
    // return this.products;
    return this.http.get<Product[]>(this.productsURL)
      .pipe(
        tap(_ => console.log('fetched products')),
        catchError(this.handleError<Product[]>('findAll', []))
      );
    }

    find(id: string): Product {
        return this.products[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                return i;
            }
        }
        return -1;
    }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

}

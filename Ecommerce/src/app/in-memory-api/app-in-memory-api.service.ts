import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from '../entities/product.entity';
import { Item } from '../entities/item.entity';

@Injectable({
  providedIn: 'root'
})
export class AppInMemoryApiService implements InMemoryDbService {
  createDb() {
    // Product array is comprehensive list of all products
    const products: Product[] = [
      { id: 'p01', name: 'A2042-01 Analog', price: 100, product_image: 'assets/images/product/1.jpeg' },
      { id: 'p02', name: 'A2042-02 Analog', price: 200, product_image: 'assets/images/product/2.jpeg' },
      { id: 'p03', name: 'A2042-03 Analog', price: 300, product_image: 'assets/images/product/3.jpeg' },
      { id: 'p04', name: 'A2042-04 Analog', price: 100, product_image: 'assets/images/product/1.jpeg' },
      { id: 'p05', name: 'A2042-05 Analog', price: 200, product_image: 'assets/images/product/2.jpeg' },
      { id: 'p06', name: 'A2042-06 Analog', price: 300, product_image: 'assets/images/product/3.jpeg' }
    ];
    // items is the shopping cart all items added to the shopping cart will use items array
    const items: Item[] = [];
    return { products, items };
  }
}


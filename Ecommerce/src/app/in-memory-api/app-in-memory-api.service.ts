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
      { id: 'p01', name: 'Fossil Men Analog Watch', price: 1100, product_image: 'assets/images/product/men-analog-watch-1.jpeg', btnClickedFlag: false },
      { id: 'p02', name: 'Armani Men Analog Watch', price: 1200, product_image: 'assets/images/product/men-analog-watch-2.jpeg', btnClickedFlag: false },
      { id: 'p03', name: 'Titan Women Analog Watch', price: 1200, product_image: 'assets/images/product/women-watch-1.png', btnClickedFlag: false },
      { id: 'p04', name: 'Fossil Women Analog Watch', price: 1099, product_image: 'assets/images/product/women-watch-2.png', btnClickedFlag: false },
      { id: 'p05', name: 'Fossil Men Analog Watch', price: 1900, product_image: 'assets/images/product/men-analog-watch-3.png', btnClickedFlag: false },
      { id: 'p06', name: 'Fossil Women Analog Watch', price: 2200, product_image: 'assets/images/product/women-watch-3.png',btnClickedFlag: false },
      { id: 'p07', name: 'Fastrack Men Analog Watch', price: 2100, product_image: 'assets/images/product/men-analog-watch-4.png', btnClickedFlag: false },
      { id: 'p08', name: 'Samsung Unisex Band', price: 2400, product_image: 'assets/images/product/unisex-band-1.png', btnClickedFlag: false },
      { id: 'p09', name: 'Fastrack Unisex Band', price: 1280, product_image: 'assets/images/product/unisex-band-2.png', btnClickedFlag: false },
      { id: 'p10', name: 'Puma Backpack', price: 650, product_image: 'assets/images/product/Puma-Unisex-Backpack.png', btnClickedFlag: false },
      { id: 'p11', name: 'Nike Backpack', price: 1800, product_image: 'assets/images/product/Nike-Unisex-Black-Solid-Backpack.png', btnClickedFlag: false },
      { id: 'p12', name: 'Women Shoulder Bag', price: 840, product_image: 'assets/images/product/women-shoulder-bag.png', btnClickedFlag: false },
      { id: 'p13', name: 'Women Sling Bag', price: 700, product_image: 'assets/images/product/women-sling-bag.png', btnClickedFlag: false },
      { id: 'p14', name: 'Roadster Unisex Sunglasses', price: 629, product_image: 'assets/images/product/Roadster-Unisex-Sunglasses.png',btnClickedFlag: false },
      { id: 'p15', name: 'Voyage Unisex Sunglasses', price: 540, product_image: 'assets/images/product/unisex-square-sunglasses.png', btnClickedFlag: false },
    ];
    // items is the shopping cart all items added to the shopping cart will use items array
    const items: Item[] = [];
    return { products, items };
  }
}


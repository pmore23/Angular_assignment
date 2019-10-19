import { Injectable } from '@angular/core';

import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {

    private products: Product[];

    constructor() {
        this.products = [
            { id: 'p01', name: 'A2042-01 Analog', price: 100, product_image: 'assets/images/product/1.jpeg' },
            { id: 'p02', name: 'A2042-02 Analog', price: 200, product_image: 'assets/images/product/2.jpeg' },
            { id: 'p03', name: 'A2042-03 Analog', price: 300, product_image: 'assets/images/product/3.jpeg' },
            { id: 'p04', name: 'A2042-04 Analog', price: 100, product_image: 'assets/images/product/1.jpeg' },
            { id: 'p05', name: 'A2042-05 Analog', price: 200, product_image: 'assets/images/product/2.jpeg' },
            { id: 'p06', name: 'A2042-06 Analog', price: 300, product_image: 'assets/images/product/3.jpeg' }
        ];
    }

    findAll(): Product[] {
        return this.products;
    }

    find(id: string): Product {
        return this.products[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}
import { Component, OnInit } from '@angular/core';

import { Product } from '../entities/product.entity';
import { Item } from '../entities/item.entity';
import { ProductService } from '../services/product.service';
import { cartItemService } from '../services/cartItem.service';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
	templateUrl: 'index.component.html'
})

export class ProductComponent implements OnInit {

	private products: Product[] = [];

	constructor(
		private productService: ProductService,
		private cartItemService: cartItemService
	) { }

	ngOnInit() {
		this.products = this.productService.findAll();
		console.log("Product Data");
	}

	addItemToCart(product): void {
		this.cartItemService.setCartItems(product);
	}
}
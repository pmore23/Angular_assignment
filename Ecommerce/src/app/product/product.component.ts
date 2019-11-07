import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Product } from '../entities/product.entity';
import { Item } from '../entities/item.entity';
import { ProductService } from '../services/product.service';
import { cartItemService } from '../services/cartItem.service';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
	templateUrl: 'product.component.html'
})
export class ProductComponent implements OnInit {
	private products: Product[] = [];
	private productCount: number = 0;
	@Output() productCntEmitter: EventEmitter<number> = new EventEmitter();

	constructor(
		private productService: ProductService,
		private cartItemService: cartItemService
	) { }

	ngOnInit() {
		this.getProducts();
		// tslint:disable-next-line: indent
		// this.products = this.productService.findAll();
		// console.log("Product Data");
	}
	addItemToCart(product): void {
		product.btnClickedFlag = true;
		this.productService.setBtnClickedFlagfn(product);
		this.cartItemService.setCartItems(product);
		this.productCount = this.cartItemService.getCartItems().length;
		this.productCntEmitter.emit(this.productCount);
	}

	

	getProducts(): void {
		this.productService.findAll().subscribe(products => this.products = products);
	} 
}

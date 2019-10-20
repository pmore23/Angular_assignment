import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../entities/product.entity';
import { Item } from '../entities/item.entity';
import { ProductService } from '../services/product.service';
import { cartItemService } from '../services/cartItem.service';

@Component({
	templateUrl: 'cart.component.html',
	styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {

	private cartItems: any = [];
	private totalItems: number = 0;
	private totalAmount: number = 0;
	private emptyCartErrorMsg: boolean = false;

	constructor(
		private activatedRoute: ActivatedRoute,
		private productService: ProductService,
		private cartItemService: cartItemService
	) { }

	ngOnInit() {
		this.cartItems = this.cartItemService.getCartItems();
		this.loadCart();
	}

	loadCart(): void {
		this.totalItems = this.cartItems.length;
		if(this.cartItems.length !== 0) {
			for (var i = 0; i < this.cartItems.length; i++) {
				if(this.cartItems[i].quantity === 0) {
					this.cartItems.splice(i, 1);
				}
			}
			this.totalAmount = this.calculateTotalAmountForCart();
		} else {
			this.emptyCartErrorMsg = true;
		}
	}

	calculateTotalAmountForCart(): number {
		let cartTotalAmount: number = 0;
		for (var i = 0; i < this.cartItems.length; i++) {
			cartTotalAmount += this.cartItems[i].price * this.cartItems[i].quantity;
		}
		return cartTotalAmount;
	}

	remove(id: string): void {
		for (var i = 0; i < this.cartItems.length; i++) {
			let item = this.cartItems[i];
			if (item.id == id) {
				this.cartItems.splice(i, 1);
				break;
			}
		}
		this.totalAmount = this.calculateTotalAmountForCart();
		this.loadCart();
	}

	increaseQuantity(id: string): void {
		for (var i = 0; i < this.cartItems.length; i++) {
			if (this.cartItems[i].id == id) {
				this.cartItems[i].quantity++;
				break;
			}
		}
		this.totalAmount = this.calculateTotalAmountForCart();
		this.loadCart();
	}

	decreaseQuantity(id: string): void {
		for (var i = 0; i < this.cartItems.length; i++) {
			if (this.cartItems[i].id == id) {
				this.cartItems[i].quantity--;
				break;
			}
		}
		this.totalAmount = this.calculateTotalAmountForCart();
		this.loadCart();
	} 

	successMsg(): void {
		alert('order placed successfully');
		window.location.href = '/orderHistory';
	}

}
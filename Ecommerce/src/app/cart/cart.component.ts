import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

import { Product } from '../entities/product.entity';
import { Item } from '../entities/item.entity';
import { cartItemService } from '../services/cartItem.service';
import { ProductService } from '../services/product.service';

@Component({
	templateUrl: 'cart.component.html',
	styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {

	private cartItems: any = [];
	private totalItems: number = 0;
	private totalAmount: number = 0;
	private emptyCartErrorMsg: boolean = false;
	@Output() productCntEmitter: EventEmitter<number> = new EventEmitter();

	constructor(
		private router: Router,
		private cartItemService: cartItemService,
		private productService: ProductService,
		@Inject(LOCAL_STORAGE) private storage: WebStorageService
	) { }

	ngOnInit() {
		this.cartItems = this.cartItemService.getCartItems();
		this.loadCart();
	}

	loadCart(): void {
		if(this.cartItems.length !== 0) {
			for (var i = 0; i < this.cartItems.length; i++) {
				if(this.cartItems[i].quantity === 0) {
					this.cartItems[i].btnClickedFlag = false;
					this.productService.setBtnClickedFlagfn(this.cartItems[i]);
					this.cartItems.splice(i, 1);
					if(this.cartItems.length == 0) {
						this.emptyCartErrorMsg = true;
					}
				}
			}
			this.totalAmount = this.calculateTotalAmountForCart();
		} else {
			this.emptyCartErrorMsg = true;
		}
		this.totalItems = this.cartItems.length;
		this.productCntEmitter.emit(this.totalItems);
	}

	calculateTotalAmountForCart(): number {
		let cartTotalAmount: number = 0;
		for (var i = 0; i < this.cartItems.length; i++) {
			cartTotalAmount += this.cartItems[i].price * this.cartItems[i].quantity;
		}
		return cartTotalAmount;
	}

	remove(item: Item): void {
		item['btnClickedFlag'] = false;
		this.productService.setBtnClickedFlagfn(item);
		this.cartItemService.removeCartItem(item);
		if(this.cartItems.length == 0) {
			this.emptyCartErrorMsg = true;
		}
		this.loadCart();
	}

	increaseQuantity(id: string): void {
		this.cartItemService.modifyQuantity(id, 'add');
		this.loadCart();
	}

	decreaseQuantity(id: string): void {
		this.cartItemService.modifyQuantity(id, 'sub');
		this.loadCart();
	} 

	orderSubmitted(): void {
		for( let i = 0; i < this.cartItems.length; i++){
			this.cartItems[i].btnClickedFlag = false;
			this.productService.setBtnClickedFlagfn(this.cartItems[i]);
		}
		if (localStorage.getItem('orderHistory') == null) { 
			let orderDetailsArr: any = [];
			let orderDetailsNumber: number = 0;
			let orderDetailsObj = {
				'orderNumber': orderDetailsNumber+1,
				'orderDetails': this.cartItems,
				'totalAmount': this.totalAmount
			}
			orderDetailsArr.push(orderDetailsObj);
			this.storage.set('orderHistory', JSON.stringify(orderDetailsArr));
			
		} else {
			let orderDetailsArr: any = JSON.parse(this.storage.get('orderHistory'));
			let orderDetailsNumber: number = orderDetailsArr.length;
			let orderDetailsObj = {
				'orderNumber': orderDetailsNumber+1,
				'orderDetails': this.cartItems,
				'totalAmount': this.totalAmount
			}
			orderDetailsArr.push(orderDetailsObj);
			this.storage.set('orderHistory', JSON.stringify(orderDetailsArr));
		}
		this.cartItemService.emptyCart();
		alert('order placed successfully with Order Number : ' + JSON.parse(this.storage.get('orderHistory')).length);
		//this.router.navigate(['/orderHistory'], {queryParams:{cartItemCount:this.cartItems.length} });
		this.router.navigate(['/orderHistory', this.cartItems.length ]);
	}

}
import { Injectable, Component } from '@angular/core';

import { Item } from '../entities/item.entity';

@Injectable()
export class cartItemService {

    private cartItems: any = [];
    
    getCartItems() {
        return this.cartItems;
    }

    setCartItems(item: Item) {
        if (this.cartItems.length !== 0) {
            let index: number = -1;
            for (var i = 0; i < this.cartItems.length; i++) {
                if(this.cartItems[i].id === item['id']) {
                    index = i;
                    break;
                }
            }
            if (index == -1) {
                item.quantity = 1;
                this.cartItems.push(item);
            } else {
                item.quantity++;
            }
        } else {
            item.quantity = 1;
            this.cartItems.push(item);
        }   
    }

    removeCartItem(item: Item) {
        if(this.cartItems.length > 0) {
			for (var i = 0; i < this.cartItems.length; i++) {
				if (this.cartItems[i].id == item['id']) {
					this.cartItems.splice(i, 1);
					break;
				}
			}
		}
    }

    modifyQuantity(id: string, action: string) {
        if(this.cartItems && this.cartItems.length > 0) {
            for (var i = 0; i < this.cartItems.length; i++) {
                if (this.cartItems[i].id == id) {
                    if(action === 'add') {
                        this.cartItems[i].quantity++;
                        break;
                    } else if (action === 'sub') {
                        this.cartItems[i].quantity--;
                        break;
                    }
                }
            }
        }
    }

    emptyCart() {
        this.cartItems.length = 0;
    }
}
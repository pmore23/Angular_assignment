import { Injectable, Component } from '@angular/core';

import { Item } from '../entities/item.entity';

@Injectable()
export class cartItemService {

    private cartItems: any = [];

    getCartItems() {
        return this.cartItems;
    }
    setCartItems(Item) {
        if (this.cartItems.length !== 0) {
            let index: number = -1;
            for (var i = 0; i < this.cartItems.length; i++) {
                if(this.cartItems[i].id === Item.id) {
                    index = i;
                    break;
                }
            }
            if (index == -1) {
                Item.quantity = 1;
                this.cartItems.push(Item);
            } else {
                Item.quantity++;
            }
        } else {
            Item.quantity = 1;
            this.cartItems.push(Item);
        }   
    }
}
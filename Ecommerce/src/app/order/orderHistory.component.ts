import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../entities/product.entity';
import { Item } from '../entities/item.entity';
import { ProductService } from '../services/product.service';

@Component({
	templateUrl: 'order.component.html'
})

export class OrderHistoryComponent implements OnInit {

	ngOnInit() {
		console.log("in order history component");
	}

}
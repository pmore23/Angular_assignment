import { Component, OnInit, Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
	templateUrl: 'order.component.html'
})

export class OrderHistoryComponent implements OnInit {

	private orderDetailsHistory: any = [];
	private noOrdersMsg: boolean = false;

	constructor(
		@Inject(LOCAL_STORAGE) private storage: WebStorageService
	) { }

	ngOnInit() {
		if(JSON.parse(this.storage.get('orderHistory')) !== null) {
			this.orderDetailsHistory = JSON.parse(this.storage.get('orderHistory'));
		} else {
			this.noOrdersMsg = true;
		}
	}
}
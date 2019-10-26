import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
	templateUrl: 'order.component.html'
})

export class OrderHistoryComponent implements OnInit {

	private orderDetailsHistory: any = [];
	private noOrdersMsg: boolean = false;
	private routeParamData: object = {};
	private cartItemCount: number = 0;
	@Output() productCntEmitter: EventEmitter<number> = new EventEmitter();

	constructor(
		@Inject(LOCAL_STORAGE) private storage: WebStorageService,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		if(JSON.parse(this.storage.get('orderHistory')) !== null) {
			this.orderDetailsHistory = JSON.parse(this.storage.get('orderHistory'));
		} else {
			this.noOrdersMsg = true;
		}
		setTimeout(() => {
			this.routeParamData = this.route.params.subscribe(params => {
				this.cartItemCount = +params['count']; // (+) converts string 'id' to a number
			});
			this.productCntEmitter.emit(this.cartItemCount);
		});
		
	}
}
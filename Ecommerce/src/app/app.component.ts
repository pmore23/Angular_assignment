import { Component, OnInit, Output, EventEmitter, Inject, ViewChild, AfterViewInit } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Routes, RouterModule, Router } from '@angular/router';
//import { CartComponent } from './product/cart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Ecommerce Application';
  private cartItemCount: number = 0;
  @Output() public sidenavToggle = new EventEmitter();
  //@ViewChild(CartComponent, {static:false}) cartCompRef: CartComponent; 

  constructor(
    @Inject(LOCAL_STORAGE) private storage: WebStorageService,
    private router: Router
  ) { }
  ngOnInit() {
    this.storage.remove('orderHistory');
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  onActivate(componentReference) {
    componentReference.productCntEmitter.subscribe((count) => {
      this.cartItemCount = count;
    });
  }

  navigateToProductsComp() {
    this.router.navigate(['/products']);
  }

 // ngAfterViewInit() {
    // console.log('this.cartCompRef : ',this.cartCompRef);
    // this.cartItemCount = this.cartCompRef.totalItems; // this.cartCompRef is giving undefined error, so unable to use it
 // }
}

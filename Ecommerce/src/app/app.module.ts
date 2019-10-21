import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { OrderHistoryComponent } from './order/orderHistory.component';
import { ProductService } from './services/product.service';
import { cartItemService } from './services/cartItem.service';
import { routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { StorageServiceModule} from 'angular-webstorage-service';
import { HeaderComponent } from './header/header.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductComponent, 
    OrderHistoryComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    MaterialModule,
    StorageServiceModule
  ],
  providers: [
    ProductService,
    cartItemService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
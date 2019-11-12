import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppInMemoryApiService } from './in-memory-api/app-in-memory-api.service';
import { HttpClientModule } from '@angular/common/http';

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
    StorageServiceModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(AppInMemoryApiService)
  ],
  providers: [
    ProductService,
    cartItemService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})

export class AppModule { }
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture  } from '@angular/core/testing';
//import { Location } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Router, RouterOutlet,ActivatedRoute } from "@angular/router";
import { RouterTestingModule } from '@angular/router/testing';
import { StorageServiceModule} from 'angular-webstorage-service';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { OrderHistoryComponent } from './order/orderHistory.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;
  let mockRouter;
  const routes: Routes = [
    { path: 'products', component: ProductComponent },
    { path: 'cart', component: CartComponent },
    { path: 'orderHistory/:count', component: OrderHistoryComponent },
    { path: '', redirectTo: '/products', pathMatch: 'full'}
  ];
  
  beforeEach(async(() => {
    mockRouter = { navigate: jasmine.createSpy('navigate') };
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ProductComponent,
        CartComponent,
        OrderHistoryComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        StorageServiceModule
      ],
      providers: [
        { provide: Router, useValue: mockRouter }
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it('App component should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should have title as 'Ecommerce Application'`, () => {
    expect(component.title).toEqual('Ecommerce Application');
  });

  it('should contain side navigation', () => {
    expect(fixture.debugElement.query(By.css('mat-sidenav')).nativeElement).toBeTruthy();
    //const button = fixture.debugElement.query(By.css('.product-grid__add-to-cart')).nativeElement;
    //button.click();         // this will change show to false
    //fixture.detectChanges();
    //expect(fixture.debugElement.query(By.css('.header')).nativeElement).toBeTruthy();
  });

  it('should contain menu navigation', () => {
    expect(fixture.debugElement.query(By.css('app-header')).nativeElement).toBeTruthy();
  });

  it('should go to products', () => {
    fixture.detectChanges();
    component.navigateToProductsComp();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/products']);   
  });

  
});

import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { OrderHistoryComponent } from './order/orderHistory.component';


const routes: Routes = [
	{ path: '', component: ProductComponent, pathMatch: 'full' },
	{ path: 'products', component: ProductComponent },
	{ path: 'cart', component: CartComponent },
	{ path: 'orderHistory/:count', component: OrderHistoryComponent },
	{ path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);
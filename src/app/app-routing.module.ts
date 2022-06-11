import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderPageComponent } from './components/order-page/order-page.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'products/:productId', component: ProductItemComponent },
  { path: 'cart/order', component: OrderPageComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
// Angular Documentation
  items: Product[] = [];

  constructor() { }

  addToCart(product: Product): void {
    if(product.quantitity === undefined){
      product.quantitity = 0;
    }
    this.items.push(product);
  }

  getCartItems(): Product[]{
    return this.items;
  }

  clearCart(): Product[] {
    this.items = [];
    return this.items;
  }

}

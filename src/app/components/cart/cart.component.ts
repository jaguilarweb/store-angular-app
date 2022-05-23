import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  /* items: Product[] = []; */
  items = this.cartService.getCartItems();

  constructor(
    private cartService: CartService
  ) {
    //this.items = this.cartService.getCartItems();
  }

  ngOnInit(): void {
  }

}

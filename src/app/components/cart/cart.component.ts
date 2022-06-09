import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Product[] = [];
  totalCart: number = 0;

  constructor(
    private cartService: CartService
  ) {

  }

  ngOnInit(): void {
    this.items = this.cartService.getCartItems();
    //Set initial value to this.totalCart
    this.totalCartResult();
  }

  //Pick up the new amount of items
  //and execute result
  onChangeQuantitity(event: Event, id: number){
    let quantitity = event.target as HTMLInputElement;
    this.items.map(item => {
      if(item.id === id){
        item.quantitity = Number(quantitity.value)
      }
    })
    //Restart the total cart
    this.totalCart = 0;
    this.totalCartResult();
  }

  totalCartResult(){
    this.items.forEach(item => {
      this.totalCart += (item.quantitity! * item.price)
    });
  }
}

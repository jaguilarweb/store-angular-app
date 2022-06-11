import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Product[] = [];
  totalCart: number = 0;
  fullname: string = '';
  adress: string = '';
  card: string = '';
  numberItems: boolean = false;

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.items = this.cartService.getCartItems();
    if(this.items.length >= 1){
      this.numberItems = true;
    }
    //Set initial value to this.totalCart
    this.totalCartResult();
  }

  //Pick up the new amount of items
  //and execute result
  onChangeQuantitity(event: Event, id: number): void{
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

  submitForm(){
    //Navigate to order-page, and send parameters
    this.router.navigate(['order', { total: this.totalCart, name: this.fullname } ], { relativeTo: this.route });
  }

  totalCartResult(): void {
    this.items.forEach(item => {
      this.totalCart += (item.quantitity! * item.price)
    });
  }

  clearMyCart(): void {
    this.items = this.cartService.clearCart()
    this.totalCart = 0;
    this.numberItems = false;
  }
}

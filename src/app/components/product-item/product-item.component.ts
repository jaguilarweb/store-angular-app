import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/Product';
import { CartService} from '../../services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product!: Product;
  prodIdRoute: number = 0;
  //If I want to control the atribute quntitity from here
  //I could to binding in the html as '[value]="quantitity"'
  //quantitity: number = 0;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.product = {
      id: 1,
      name: '',
      price: 0,
      url: '',
      description: '',
    }
   }

  ngOnInit(): void {
    // Angular documentation, to obtain the product id
    const routePar = this.route.snapshot.paramMap;
    this.prodIdRoute = Number(routePar.get('productId'));
    if(this.prodIdRoute !== 0){
      this.productService.getProducts().subscribe(res => {
        this.product = res.find(prod => prod.id === this.prodIdRoute) as unknown as Product;
        if(this.product.quantitity === undefined){
          this.product.quantitity = 1;
        }
      })
    }
  }

//Some other event to use https://www.eduforbetterment.com/lists-of-useful-events-types-for-event-binding-in-angular/
  onChange(event: Event): void{
    const element = event.target as HTMLInputElement;
    this.product.quantitity = Number(element.value);
  }

  addItemToCart() : void {
    this.cartService.addToCart(this.product);
    window.alert(`Your product ${this.product.name} has been added!`)
  }

}

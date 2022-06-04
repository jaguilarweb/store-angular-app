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
  //productSelected: Product;
  prodIdRoute: number = 0;

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
      })
    }
/*     //TODO: I need to look for the id provided into the all products to render it.
    this.productService.getProducts().subscribe(res => {
      this.product = res.find(prod => prod.id === this.prodIdRoute) as unknown as Product;
    }) */

  }

  addItemToCart(id: number) {
    console.log(`Prod_item argument: `)
    //TODO: Increase on depend of the quantity
    //this.productService.getProductItem(id).subscribe(res =>  this.product = res )
    this.cartService.addToCart(this.product);
    window.alert(`Your product ${this.product} has been added!`)
  }

}

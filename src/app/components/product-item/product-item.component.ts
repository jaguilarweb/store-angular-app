import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  products: Product[] = [];
  @Input() product: Product;
  prodIdRoute: number = 0;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
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
    //TODO: I need to look for the id provided into the all products to render it.
    this.productService.getProducts().subscribe(res => {
      this.product = res.find(prod => prod.id === this.prodIdRoute) as unknown as Product;
    })
  }

}

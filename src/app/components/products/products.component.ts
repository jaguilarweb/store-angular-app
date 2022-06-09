import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => {
      //Here we can include atribute there are not included in the original data
      //this.products = res;
      for (let index=0; index < res.length; index++){
        const product = res[index];
        product["quantitity"] = 1;
      }
      this.products = res;
    });
  }

}

import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'assets/data.json';
  products : Product[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.productUrl);
  }

  getProductItem(id: number): Observable<Product>{
    const url = `${this.productUrl}/?id=${id}`
    return this.http.get<Product[]>(url).pipe(
      map((products: Product[]) => products[0])
    );
  }
}

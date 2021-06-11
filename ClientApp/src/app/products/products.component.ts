import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';

@Component({
  selector: 'app-products',
  styleUrls: ['products.component.css'],
  templateUrl: './products.component.html'
})
export class ProductComponent {
  public products: Product[];

  displayedColumns: string[] = ['picture', 'weight', 'length','thickness','price'];
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Product[]>(baseUrl + 'api/products').subscribe(result => {
      this.products = result;
    }, error => console.error(error));
  }
}


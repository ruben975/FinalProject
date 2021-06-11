import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Order } from '../models/Order';
import { Cars } from '../models/Car';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html'
})
export class OrderAddComponent implements OnInit{

  public order: Order = <Order>{};
  public cars: Cars[]; 
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) { }

  ngOnInit() {
    this.loadCars();
    }
  loadCars() {
    this.http.get<Cars[]>(this.baseUrl + 'api/cars').subscribe(result => {
      this.cars = result;
    }, error => console.error(error));
  }
  public saveOrder() {
    this.http.post(this.baseUrl + 'api/orders', this.order).subscribe(result => {
      this.router.navigateByUrl("/orders");
    }, error => console.error(error))
  }
}

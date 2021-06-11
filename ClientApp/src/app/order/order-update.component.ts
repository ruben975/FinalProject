import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Order } from '../models/Order';
import { Cars } from '../models/Car';

@Component({
  selector: 'app-order-update',
  templateUrl: './order-update.component.html'
})
export class OrderUpdateComponent implements OnInit {

  public order: Order;
  public param;
    cars: Cars[];

  ngOnInit() {
    this.routers.queryParams.subscribe(param => {
      this.param = param;
      this.loadOrders();
      this.loadCars();
    });
  }
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private routers: ActivatedRoute, private router: Router) { }

  loadOrders() {
    this.http.get<Order>(this.baseUrl + 'api/orders/' + this.param.id).subscribe(result => {
      this.order = result;
    }, error => console.error(error));
  }
  public saveOrder() {
    this.http.put(this.baseUrl + 'api/orders/' + this.order.id, this.order).subscribe(result => {
      this.router.navigateByUrl("/orders");
    }, error => console.error(error));
  }
  public backToList() {
    this.router.navigateByUrl("/orders");
  }
  loadCars() {
    this.http.get<Cars[]>(this.baseUrl + 'api/cars').subscribe(result => {
      this.cars = result;
    }, error => console.error(error));
  }
}

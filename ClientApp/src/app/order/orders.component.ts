import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Cars } from '../models/Car';
import { Order } from '../models/Order';

@Component({
  selector: 'app-orders-component',
  styleUrls: ['orders.component.css'],
  templateUrl: './orders.component.html'
})
export class OrdersComponent {

  public cars: Cars[];
  public orders: Order[];
  displayedColumns: string[] = ['name', 'carId', 'price', 'adress', 'action'];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.getCar();
    this.loadOrder();
  }
  public deleteOrder(order: Order) {
    this.http.delete(this.baseUrl + 'api/orders/' + order.id).subscribe(result => {
      this.loadOrder();
    }, error => console.error(error))
  }


  loadOrder() {
    this.http.get<Order[]>(this.baseUrl + 'api/orders').subscribe(result => {
      this.orders = result;
    }, error => console.error(error));
  }
  
  public getCar() {
    this.http.get<Cars[]>(this.baseUrl + 'api/cars').subscribe(result => {
      this.cars = result;
    }, error => console.error(error))
  }

}


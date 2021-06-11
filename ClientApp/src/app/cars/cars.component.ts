import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Cars } from '../models/Car';

@Component({
  selector: 'app-cars-component',
  styleUrls: ['cars.component.css'],
  templateUrl: './cars.component.html'
})
export class CarsComponent {

  public cars: Cars[];
  displayedColumns: string[] = ['picture', 'type', 'length'];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Cars[]>(baseUrl + 'api/cars').subscribe(result => {
      this.cars = result;
    }, error => console.error(error));
  }
}

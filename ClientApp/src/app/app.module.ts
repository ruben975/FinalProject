import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { ProductComponent } from './products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { OrdersComponent } from './order/orders.component';
import { OrderAddComponent } from './order/order-add.component';
import { OrderUpdateComponent } from './order/order-update.component';
import { MatButtonModule,  MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTooltipModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CarsComponent,
    ProductComponent,
    OrdersComponent,
    OrderAddComponent,
    OrderUpdateComponent
   
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'cars', component: CarsComponent },
      { path: 'products', component: ProductComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'order-add', component: OrderAddComponent },
      { path: 'order-update', component: OrderUpdateComponent }
    ]),
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

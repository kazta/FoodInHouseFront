import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/component/restaurant.component';
import { RestaurantsComponent } from './restaurant/restaurants/restaurants.component';
import { FoodComponent } from './food/component/food.component';
import { AppRoutingModule } from './app-routing.module';
import { FoodsComponent } from './food/foods/foods.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderComponent } from './order/component/order.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    RestaurantsComponent,
    FoodComponent,
    FoodsComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/component/restaurant.component';
import { RestaurantsComponent } from './restaurant/restaurants/restaurants.component';
import { FoodComponent } from './food/component/food.component';
import { AppRoutingModule } from './app-routing.module';
import { FoodsComponent } from './food/foods/foods.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    RestaurantsComponent,
    FoodComponent,
    FoodsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

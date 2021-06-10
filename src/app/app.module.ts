import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/component/restaurant.component';
import { RestaurantsComponent } from './restaurant/restaurants/restaurants.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    RestaurantsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

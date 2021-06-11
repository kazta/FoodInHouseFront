import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodsComponent } from './food/foods/foods.component';
import { RestaurantsComponent } from './restaurant/restaurants/restaurants.component';

const routes: Routes = [
  { path: '', redirectTo: 'restaurants', pathMatch: 'full' },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'foods/restaurant/:id', component: FoodsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
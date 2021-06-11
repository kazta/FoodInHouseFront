import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Food } from '../food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoods(restaurantId: number): Observable<Food[]>{
    return of([
      {id:1, name: "Hamburguesa de pollo", price: 12000},
      {id:2, name: "Choriperro", price: 5000}
    ]);
  }
}

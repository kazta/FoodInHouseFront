import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Restaurant } from '../restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }

  getRestaurants(): Observable<Restaurant[]>{
    return of([
      {id: 1, name: "Restaurante doña Tulia", time: 14, address: "Carrera 5A #85-34", food: "Hamburguesa - Perro - Pizza"},
      {id: 2, name: "Los dichos de mi amá", time: 25, address: "Calle 15 #5-34", food: "Almuerzos"}
    ]);
  }
}

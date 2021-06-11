import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Food } from '../food';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private url = "http://192.168.1.8:8080/api/getFoodById";

  constructor(private http: HttpClient) { }

  getFoods(restaurantId: String): Observable<Food[]>{
    return this.http.get<Food[]>(this.url + "?id=" + restaurantId);
  }
}

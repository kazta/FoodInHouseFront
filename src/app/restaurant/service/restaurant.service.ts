import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Restaurant } from '../restaurant';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private url = "http://192.168.1.8:8080/api/getRestaurants";

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(this.url);
  }
}

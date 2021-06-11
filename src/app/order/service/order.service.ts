import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Food } from 'src/app/food/food';
import { Order } from '../order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  order: Order ={
    id: 0,
    items: [],
    total: 0
  }

  constructor() { }

  getOrder(): Observable<Order>{
    return of(this.order);
  }

  addItem(food: Food, observation: string):void{
    var i = this.order.items.findIndex(element => element.food.id == food.id && element.observation == observation);
    if(i !== -1){
      this.order.items[i].cant++;
    }
    else
      this.order.items.push({cant: 1, food: food, observation: observation});
    
    this.order.total = this.order.items.reduce(function(res,val){ return res + val.food.price * val.cant;},0);
  }

}

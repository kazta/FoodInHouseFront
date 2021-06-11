import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OrderService } from 'src/app/order/service/order.service';
import { Food } from '../food';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  @Input() food?: Food;

  observation: string = "";

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }

  addFood(food:Food): void{
    this.orderService.addItem(food, this.observation.trim());
  }

}

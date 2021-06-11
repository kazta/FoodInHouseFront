import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../food';
import { FoodService } from '../service/food.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {

  foods: Food[] = [];

  constructor(
    private route: ActivatedRoute, 
    private foodService: FoodService, 
    private location: Location) { }

  ngOnInit(): void {
    this.getFoods();
  }

  getFoods(): void{
    //const id = Number(this.route.snapshot.paramMap.get('id'));
    this.foodService.getFoods(1).subscribe(foods => this.foods = foods);
  }

}

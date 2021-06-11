import { Component, Input, OnInit } from '@angular/core';
import { Food } from '../food';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  @Input() food?: Food;

  constructor() { }

  ngOnInit(): void {
  }

}

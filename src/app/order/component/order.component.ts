import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/food/food';
import { Order } from '../order';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order: Order = {
    id: 0,
    items: [],
    total: 0
  }

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrder().subscribe(order => this.order = order);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { products } from './../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent implements OnInit {

  @Input()
  alertProducts !: Product;

  constructor() { }

  ngOnInit() {
  }

  isDisplay(price: number): boolean{
    if (price > 700) {
      return true;
    }else{
      return false;
    }
  }


}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  discountedPrice: number;
  title = 'price-calc-angular';

  onClick(price, discount){
    this.discountedPrice = price - (price*(discount/100));
  }
}

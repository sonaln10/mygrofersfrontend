import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
cart;

  constructor(private dataservice:DataService){
    this.cart=this.dataservice.getData();
   }

}


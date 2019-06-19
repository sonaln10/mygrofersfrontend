import { Component} from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import { Item } from 'src/app/models/item';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
count:number;
cartItems:Item[]=[];

constructor(private userService:UserService) {}

showCounter(count) {
  this.count=count;
}

showCartItems(cartItems){
  console.log("inside show cart items in home component");
  this.cartItems=cartItems;
  console.log("test",this.cartItems);
}


}

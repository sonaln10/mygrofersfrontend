import { Component, OnInit} from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import { Item } from 'src/app/models/item';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
n: string;
count:number;
cartItems:Item[]=[];

constructor(private userService:UserService) {}

  ngOnInit() {
    console.log("home ngoninit");
 this.n=this.userService.getData();
}

showCounter(count) {
  this.count=count;
}

showCartItems(cartItems){
  console.log("inside show cart items in home component");
  this.cartItems=cartItems;
  console.log("test",this.cartItems);
}


}

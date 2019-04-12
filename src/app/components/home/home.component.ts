import { Component, OnInit} from '@angular/core';
import { DataService } from "src/app/services/data.service";
import { Item } from 'src/app/entities/item';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
n: string;
count:number;
cartItems:Item[]=[];

constructor(private dataservice:DataService) {}

  ngOnInit() {
    console.log("home ngoninit");
 this.n=this.dataservice.getData();
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

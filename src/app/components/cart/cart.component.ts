import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart;
  filteredCart:any;
  items: any = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.cart = this.userService.getData();
    this.cart = this.cart.filter(function (elem, index, self) {
      return index === self.indexOf(elem);
    })
    this.cart.forEach(element => {
      if(element.quantity>0)
        this.items.push(element);
    });
    this.filteredCart=this.items;
        
    //    this.cart=this.filteredCart;
     console.log("filter cart: " + JSON.stringify(this.filteredCart));
  }

  //    onAdd(productId){
  //     this.items[productId].quantity++;
  //     console.log(productId);
  // }

  // onSub(productId){
  //   this.items[productId].quantity--;
  //   console.log(productId);
  // }

}


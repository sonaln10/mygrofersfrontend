import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Item } from 'src/app/entities/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart;
  filteredCart:any;
  items: any = [];

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.cart = this.dataservice.getData();
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


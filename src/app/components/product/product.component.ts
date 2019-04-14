import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/entities/item';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  items: Item[] = [];
  count: number =0;
  @Output() emitter = new EventEmitter();
  @Output() cartItemsEmitter=new EventEmitter();
  itemModel:any;
  cartItems: Item[]=[];
  //index:number;


  constructor() {}
  ngOnInit() {
    this.items =
      [
        {
          product:
            {
              id: 0,
              productName: 'Noodles',
              companyName: 'Maggie',
              price: 12,
              photo: 'assets/images/maggie.jpg'
            },
          quantity: 0

        },
        {
          product:
            {
              id: 1,
              productName: 'Noodles',
              companyName: 'Patanjali',
              price: 10,
              photo: 'assets/images/patanjali.png'
            },
          quantity: 0

        },
        {
          product:
            {
              id: 2,
              productName: 'Honey',
              companyName: 'Patanjali',
              price: 18,
              photo: 'assets/images/DaburHoney.png'
            },
          quantity: 0
        }
      ];
  }

  addItem() {
    this.items.push(this.itemModel);
  }
  onAdd(productId){
      this.items[productId].quantity++;
      console.log(productId);
      this.cartItems.push(this.items[productId]);
      this.count++;
      this.emitter.emit(this.count);
      this.cartItemsEmitter.emit(this.cartItems);
  }

  onSub(productId){
    this.items[productId].quantity--;
    console.log(productId);    
    this.count--;
    this.emitter.emit(this.count);
  //   if(this.items[productId].quantity===0)
  //   {
  //   let index=this.cartItems.indexOf(this.items[productId]);
  //     this.cartItems.splice(index);
  // }
    // console.log("index: "+this.index);
    //  if(this.items[productId].quantity===0)
    //  this.cartItems.splice(this.index);
  //   //this.items[productId].quantity;
  //   function isBigEnough(element, index, array) { 
  //     return ( element>0); 
  //  } 
  //  if(this.items.every(isBigEnough))
  //  this.cartItems.push(this.items[productId]);
  //  console.log("this.items.every(isBigEnough): "+this.items.every(isBigEnough)+"this.cartItems: "+this.cartItems);
    this.cartItemsEmitter.emit(this.cartItems);
  }
}

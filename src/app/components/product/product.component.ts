import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/entities/item';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  items: any = [];
  count: any =0;
  prodName: string;
  compName: string;
  price: number;
  item: Item;
  id: number =2;
  @Output() emitter = new EventEmitter();
  itemModel:any;
  cartItems: Item[]=[];
  route;


  constructor(private dataService:DataService, private  router:Router) {
this.route=this.router;
    this.itemModel={
    "product":
    {  
        "id": this.id,
        "productName": "",
        "companyName": "",
        "price": "",
        "photo": ""
      },
      "quantity": ""
    }    
   }
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
      console.log(productId)
      this.count++;
      this.emitter.emit(this.count);
  }

  onSub(productId){
    this.items[productId].quantity--;
    console.log(productId);
    this.count--;
    this.emitter.emit(this.count);
  }

    myCart(){
      this.emitter.emit(this.items);
    }
    myOutputMethod(){
      console.log("inside product component.ts: "+this.items);
      this.items=this.items.filter(i=>i.quantity!==0)
      this.dataService.setData(this.items);
      this.route.navigate(['CartComponent', {cart: this.items}]);
     }
}

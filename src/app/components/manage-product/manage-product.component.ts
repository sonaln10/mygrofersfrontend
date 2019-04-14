import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {
  itemModel:any;
  id: number =2;
  constructor() {
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
  }

}

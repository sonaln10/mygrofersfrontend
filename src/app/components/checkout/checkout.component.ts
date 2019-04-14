import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
totalBill:number;
  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  checkout(){
this.userService.setData(this.totalBill);
  }

}

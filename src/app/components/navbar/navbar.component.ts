import { Component, Input, OnChanges,ViewEncapsulation} from '@angular/core';
import { UserService } from 'src/app/services/user.service';
//import { ViewEncapsulation } from '@angular/compiler/src/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnChanges {
  @Input() cartValue:number;
  @Input() itemsInCart: any;
  
    constructor(private userService:UserService) { }
  
  
  myOutputMethod(){
  this.userService.setData(this.itemsInCart);
  }
  ngOnChanges(){
    this.myOutputMethod();
  }
  
}

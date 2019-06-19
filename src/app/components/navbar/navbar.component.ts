import { Component, Input, OnChanges,ViewEncapsulation, OnInit} from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnChanges,OnInit {
  @Input() cartValue:number;
  @Input() itemsInCart: any;
  n: string;
    constructor(private userService:UserService) { }
  
  
  myOutputMethod(){
  this.userService.setData(this.itemsInCart);
  }
  ngOnChanges(){
    this.myOutputMethod();
  }
  ngOnInit() {
    
 this.n=this.userService.getData();
}
}

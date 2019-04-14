import { Component, Input, OnInit, OnChanges} from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnChanges {

@Input() cartValue:number;
@Input() itemsInCart: any;

constructor(private userService: UserService)
{
  console.log("inside navbar constructor");
}
myOutputMethod(){
this.userService.setData(this.itemsInCart);
}
ngOnChanges(){
  this.myOutputMethod();
}
}

import { Component, Input, OnInit, OnChanges} from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnChanges {

@Input() cartValue:number;
@Input() itemsInCart: any;

constructor(private dataService: DataService)
{
  console.log("inside navbar constructor");
}
myOutputMethod(){
this.dataService.setData(this.itemsInCart);
}
ngOnChanges(){
  this.myOutputMethod();
}
}

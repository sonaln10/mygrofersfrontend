import { Component, Input, OnInit} from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

@Input() cartValue:number;


constructor(private dataService: DataService)
{
  console.log("inside navbar constructor");
}

}

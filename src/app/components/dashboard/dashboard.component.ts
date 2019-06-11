import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
n:String;
panelOpenState = false;
constructor(private userService:UserService) { }
  

ngOnInit() {
  console.log("dashboard ngoninit");
this.n=this.userService.getData();
}
}

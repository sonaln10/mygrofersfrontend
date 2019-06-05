import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
n:String;

  constructor(private userService:UserService) { }

  ngOnInit() {
    console.log("dashboard ngoninit");
 this.n=this.userService.getData();
}
}

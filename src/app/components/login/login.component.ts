import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from "src/app/services/data.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
name:string;
psw:string;
roles: Role[]=[
  {value: 0, viewValue: 'Owner'},
  {value: 1, viewValue: 'Customer'}
];
  constructor(private dataService:DataService) { }

  ngOnInit() { 
  }
  myOutputMethod(){
     this.dataService.setData(this.name);
    }
}
export interface Role {
  value: number;
  viewValue: string;
}

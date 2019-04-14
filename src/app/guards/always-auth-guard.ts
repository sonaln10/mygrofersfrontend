import {CanActivate, Router} from "@angular/router";
import { Injectable } from '@angular/core';
import { DataService } from '../services/data.service';

@Injectable()
export class AlwaysAuthGuard implements CanActivate{
password;

    constructor(private dataService:DataService,private router:Router){
        this.password=this.dataService.getData();
    }

    canActivate() {
        
        console.log("inside canActivate ",this.password);
        if (this.dataService.isLoggedIn(this.password)) {
          return true;
        } else {
         // window.alert("You don't have permission to view this page");
         this.router.navigate(['/','login']);
         console.log("failed logging in");
          return false;
        }
      }
}
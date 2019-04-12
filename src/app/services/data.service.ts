import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  name:any;

  setData(name){
    this.name=name;
  }
  getData()
  {
    return this.name;
  }

  isLoggedIn(password:any):boolean{
     console.log("inside isLoggedIn()");
    if(password==="Aditya@14")
    return true;
    else 
    return false;
  }
}

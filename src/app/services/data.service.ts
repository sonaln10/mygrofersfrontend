import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

   data:any;

   setData(data){
     this.data=data;
   }
  getData()
  {
    return this.data;
  }

  isLoggedIn(password:any):boolean{
     console.log("inside isLoggedIn(): "+password);
    if(password==="Aditya@14")
    return true;
    else 
    return false;
  }
}

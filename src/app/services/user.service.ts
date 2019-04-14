import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  name:any;

  setData(name){
    this.name=name;
  }
  getData()
  {
    return this.name;
  }
}

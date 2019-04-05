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
}

import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import { Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() power: string;

@Input() counter: number;
 // @Output() counterChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
// ngOnChanges(power:string){
// this.power=power;
// return this.power;
// }

// increment() {
//     this.counterChange.emit(++this.counter);
//   }

}

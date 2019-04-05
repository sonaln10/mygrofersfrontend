import { Component, OnInit} from '@angular/core';
import { DataService } from "src/app/services/data.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
n: string;
count:number;

constructor(private dataservice:DataService) {}

  ngOnInit() {
 this.n=this.dataservice.getData();
}

showCounter(count) {
  this.count=count;
}


}

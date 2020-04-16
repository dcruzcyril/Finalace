import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
 
 
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  arr;
  // name;
  constructor(private us: ServiceService) { }
 
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.us.getData().subscribe(data => { this.arr = data; });
    console.log(this.arr)
}
 
delData(id) {
  this.us.delData(id);
}
 
 
}
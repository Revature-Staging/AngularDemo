import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  interpolatedFromTheBack:string = "Now you see me!"
  
  prop:boolean = true;

  secretMessage:string;

  changeProp(){
    this.prop = !this.prop;
  }
}

import { Component, OnInit } from '@angular/core';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-directtive-assignment',
  templateUrl: './directtive-assignment.component.html',
  styleUrls: ['./directtive-assignment.component.css']
})
export class DirecttiveAssignmentComponent implements OnInit {

isClicked:boolean = false;
demoArray = [];
counter = 0;
  constructor() { }

onToggleAdd () {
this.isClicked = !this.isClicked;
this.demoArray.push(this.counter);
this.counter = this.counter + 1;
}
getColor(){
  if(this.counter > 5)
  return "red";
  else
  return "transparent";
}
  ngOnInit() {
  }

}

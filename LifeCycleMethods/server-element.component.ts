import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
 OnInit, OnChanges, DoCheck, 
 AfterContentInit , AfterContentChecked,
 AfterViewInit, AfterViewChecked, OnDestroy
 {
@Input('srvElement') element: {type: string, content:string,name:string}
@Input() name: string;
  constructor() {
    console.log('const called!');
   }

   ngOnChanges(changes: SimpleChanges){
console.log('onChanges called!');
console.log(changes);
   }

  ngOnInit(): void {
    console.log('ngOnInit called!');
  }

  ngDoCheck(){
console.log('not to be used really');
  }

  ngAfterContentInit() {
    console.log('after init and only once');
  }
  ngAfterContentChecked(){
    console.log('called after every change detection cycle');
  }

  ngAfterViewInit() {
    console.log('after view init and only once');
  }
  ngAfterViewChecked(){
    console.log('called after every change detection cycle and after view');
  }

  ngOnDestroy(){
    console.log('just before destroying');
  }

}

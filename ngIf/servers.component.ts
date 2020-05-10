import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  buttonDisabled : boolean = false;
  serverCreated = "Not yet!"
serverName= "test server";
isButton:boolean = false;
isClicked:boolean = false;

  constructor() { 
    setTimeout(() => {this.buttonDisabled = true},3000);
  }

  ngOnInit() {
  }
onServerCreation () {
this.serverCreated = "i'm created now";
}

onUpdateServerName (event: Event) {
this.serverName = (<HTMLInputElement>event.target).value;
}
onResetInput() {
  this.isClicked = true;
 // this.serverName = "";
this.isButton = false;
}
}

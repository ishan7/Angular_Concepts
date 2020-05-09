import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  buttonDisabled : boolean = false;
  constructor() { 
    setTimeout(() => {this.buttonDisabled = true},3000);
  }

  ngOnInit() {
  }

}

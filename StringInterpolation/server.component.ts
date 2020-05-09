import {Component} from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
introduction: string = 'this is Ishan!!!!!!!';
about: string = 'bestttt everrrrrrr';

getStatus() {
   // var about:string = 'number one';
    return this.about;
}

    
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombres:string[]=[];
  name:string;

  addName(name:string) {
    this.nombres.push(name);
  }
}



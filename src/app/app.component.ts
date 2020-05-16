import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-app';
  name = 'Angular app';

  constructor() {
    this.title = 'new sample-app';
    console.log("12345");
    this.changeName('This is new name');

  }

  changeName(name: string): void {
    this.name = name;
  }
}

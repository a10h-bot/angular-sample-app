import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'sample-app';
  name: string = 'Angular app';

  constructor() {
    this.title = 'Angular sample-app';
    this.changeName('This is new name');
  }

  changeName(name: string): void {
    this.name = name;
  }
}

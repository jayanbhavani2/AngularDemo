import { Component } from '@angular/core';

@Component({
  selector: 'bhavani-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularDemo';
  myName = 'Bhavani';
  parentName = 'Suresh';
  parentSurname = 'Nakka';

  addTest(event:any) {
    this.parentSurname = event;
  }
}

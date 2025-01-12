import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  template: `
    <h1>{{title}} {{ 15 - 10 }} </h1>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hiiii';
}

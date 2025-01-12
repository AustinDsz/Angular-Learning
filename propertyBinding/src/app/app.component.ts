import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Hello {{title}}</h1>
    <input [type]="typeOfInput">
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'propertyBinding';
  typeOfInput = 'date';
}

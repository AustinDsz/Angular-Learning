import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>{{ message }} {{count}}</h1>
    <button (click)='buttonAction()'>Click here</button>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  message = ''
  count = 0 ;

  buttonAction() {
    this.message = "Hello";
    this.count += 1
  }

}

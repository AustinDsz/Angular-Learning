import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  template: `
        <ul>
          <li><a routerLink="/">Home</a></li>
          <li><a routerLink="/services">Services</a></li>
          <li><a routerLink="/about">About</a></li>
          <li><a routerLink="/contact">Contact</a></li>
        </ul>
        <router-outlet/>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routing';
}

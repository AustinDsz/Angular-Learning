import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent],
  template: '<app-user place="Bahamas"/>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'input';
}

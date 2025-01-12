import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsercomponentComponent } from './usercomponent/usercomponent.component';


@Component({
  selector: 'app-root',
  imports: [UsercomponentComponent],
  template: `<h1>
    <app-usercomponent/>
  </h1>`
})
export class AppComponent {
}


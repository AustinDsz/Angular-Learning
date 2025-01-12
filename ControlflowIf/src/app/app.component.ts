import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  template:` @if(isActive) {
      <p>{{active}}</p>
    } @else {
      <p>{{inactive}}</p>
    }`

})
export class AppComponent {
  isActive = false;
  active = 'User is active';
  inactive = 'User is inactive';
}

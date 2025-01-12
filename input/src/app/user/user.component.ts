import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  template: `
    <h1>I am going to {{ place }}.</h1>
  `,
  styleUrl: './user.component.css'
})
export class UserComponent {
    @Input() place = ''
}

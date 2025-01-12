import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  template: `
    <h1>Bellow is a message, click the button</h1>
    <button (click)="buttonAction()">Click Me</button>
  `,
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() stringEvent = new EventEmitter<string>();

  message = "Hello";
  count = 0;

  buttonAction()  {
      this.stringEvent.emit(this.message +" "+ ++this.count)
  }

}

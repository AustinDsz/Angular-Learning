import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildComponent],
  template: `<app-child (stringEvent)="datadisplay($event)"/>
            <h1>{{ datas }}</h1>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'output';
  datas='';

  datadisplay(data: string) {
    this.datas = data;
  }
}

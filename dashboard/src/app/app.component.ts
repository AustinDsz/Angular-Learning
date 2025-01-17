import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { BarComponent } from "./bar/bar.component";
import { DonutComponent } from "./donut/donut.component";
import { LineComponent } from "./line/line.component";
import { PieComponent } from "./pie/pie.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, BarComponent, DonutComponent, LineComponent, PieComponent],
  template: `
      <app-nav/>
      <div class="content p-4">
        <div class="items" id="top">
          <app-bar/>
        </div>
        <div class="items" id="top">
          <app-donut/>
        </div>
        <div class="items">
          <app-line/>
        </div>
        <div class="items">
          <app-pie/>
        </div>
      </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dashboard';
}

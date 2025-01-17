import { Component } from '@angular/core';


// bar
import { BarComponent } from './bar/bar.component';

//pie
import { PieComponent } from './pie/pie.component';

// line
import { LineComponent } from "./line/line.component";

// donut
import { DonutComponent } from './donut/donut.component';

@Component({
  selector: 'app-root',
  imports: [BarComponent, PieComponent, LineComponent, DonutComponent],
  template: `
    <div style="display: grid; grid-template-columns: 1fr 1fr">
          <app-bar/>
          <app-pie/>
          <app-line/>
          <app-donut/>
    </div>
    `,
})
export class AppComponent {
  title = 'angular-ag-charts';

}

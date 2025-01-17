import { Component } from "@angular/core";
import { AgCharts } from "ag-charts-angular";
import { AgChartOptions } from "ag-charts-community";
import { getData } from "./data";

@Component({
  selector: 'app-line',
  imports: [AgCharts],
  templateUrl: './line.component.html',
  styleUrl: './line.component.css'
})
export class LineComponent {
  public options: AgChartOptions;

  constructor() {
    this.options = {
      title: {
        text: "Annual fuel expenditure",
      },
      data: getData(),
      series: [
        {
          type: "line",
          xKey: "quarter",
          yKey: "petrol",
          yName: "Petrol",
        },
        {
          type: "line",
          xKey: "quarter",
          yKey: "diesel",
          yName: "Diesel"
        },
      ],
    };
  }
}

import { Component } from "@angular/core";
import { AgCharts } from "ag-charts-angular";
import { AgChartOptions } from "ag-charts-community";
import { getData } from "./data";

@Component({
  selector: 'app-donut',
  imports: [AgCharts],
  templateUrl: './donut.component.html',
  styleUrl: './donut.component.css'
})
export class DonutComponent {
  public options: AgChartOptions;

  constructor() {
    this.options = {
      data: getData(),
      title: {
        text: "Portfolio Composition",
      },
      series: [
        {
          type: "donut",
          calloutLabelKey: "asset",
          angleKey: "amount",
          innerRadiusRatio: 0.7,
        },
      ],
    };
  }
}

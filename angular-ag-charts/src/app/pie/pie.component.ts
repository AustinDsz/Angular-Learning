import { Component } from "@angular/core";
import { AgCharts } from "ag-charts-angular";
import { AgChartOptions } from "ag-charts-community";
import { getData } from "./data";

@Component({
  selector: 'app-pie',
  standalone: true,
  imports: [AgCharts],
  templateUrl: "./pie.component.html",
  styleUrl: './pie.component.css'
})
export class PieComponent {
  public options: AgChartOptions;

  constructor() {
    this.options = {
      data: getData(),
      title: {
        text: "Portfolio Composition",
      },
      series: [
        {
            type: 'pie',
            angleKey: 'amount',
            calloutLabelKey: 'asset',
            sectorLabelKey: 'amount',
            sectorLabel: {
                color: 'white',
                fontWeight: 'bold',
            },
        },
    ],
    };
  }
}

import { Component } from '@angular/core';
// Angular Chart Component
import { AgCharts } from 'ag-charts-angular';
// Chart Options Type Interface
import { AgChartOptions } from 'ag-charts-community';

// data
import { chartData, seriesType } from './data';

@Component({
  selector: 'app-bar',
  imports: [AgCharts],
  template: `
        <div>
        <ag-charts
          style="height: 20%; display: flex;"
        [options]="chartOptions">
        </ag-charts>
        </div>
  `,
  styleUrl: './bar.component.css'
})
export class BarComponent {

  // Chart Options
  public chartOptions: AgChartOptions;
  constructor() {
    this.chartOptions = {

      title: {
        text: "Portfolio Composition",
      },

      // Data
      data: chartData,

      // Series
      series: [{ type: 'bar', xKey: 'month', yKey: 'iceCreamSales' }]

    };
  }

}

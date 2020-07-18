import { Component, Input } from '@angular/core';
import { DatasetColor } from '@rinminase/ng-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {
  @Input() chartData: Array<{data: Array<number>,label: string}>;
  @Input() chartLabels: Array<string>;
  chartOptions = {
    responsive: true,
  };
  chartLegend = false;
  chartPlugins = [];
  chartColors: DatasetColor[] = [
    {
      backgroundColor: '#20ED83',
    },
  ];

}

import { Component, Input } from '@angular/core';
import { DatasetColor } from '@rinminase/ng-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {

  @Input() chartData: Array<{data: Array<number>,label: string}>;
  @Input() chartLabels: string[];
  chartOptions = {
    responsive: true,
  };
  chartColors: DatasetColor[] = [
    {
      borderColor: '#20ED83',
    },
    {
      borderColor: '#2E3FE9',
    },
  ];
  chartLegend = true;
  chartPlugins = [];

}

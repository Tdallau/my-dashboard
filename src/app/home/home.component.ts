import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  salaryMonthChart = [
    { data: [792, 726, 759, 1056, 748, 594], label: 'Salaris' },
    { data: [500, 572, 572, 691.82, 572, 0], label: 'Salaris uitbetaald' },
  ];
  hoursChart = [
    { data: [72, 66, 69, 96,68, 54], label: 'Uren' },
  ]
  tableDays: Array<{date: Date, start: Date, end: Date, break: Date  }> = [];
  chartLabels = ['Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli'];
  table: Array<{month: string, hours: number, salary: number, payed: number, shortage: number}> = [];
  totalHours: number;
  totalSalary: number;
  totalPayed: number;
  totalShortage: number;

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.chartLabels.length; i++) {
      this.table.push({
        month: this.chartLabels[i],
        hours: this.hoursChart[0].data[i],
        salary: this.salaryMonthChart[0].data[i],
        payed: this.salaryMonthChart[1].data[i],
        shortage: this.salaryMonthChart[0].data[i] - this.salaryMonthChart[1].data[i]
      })
      
    }
    this.totalHours = this.table.reduce((accum, item) => accum + item.hours, 0);
    this.totalSalary = this.table.reduce((accum, item) => accum + item.salary, 0);
    this.totalPayed = this.table.reduce((accum, item) => accum + item.payed, 0);
    this.totalShortage = this.table.reduce((accum, item) => accum + item.shortage, 0);


    this.tableDays.push({
      date: new Date(),
      start: new Date(0,0,0,8,30),
      end: new Date(0,0,0,17,0),
      break: new Date(0,0,0,0,30)
    })
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() table: Array<{month: string, hours: number, salary: number, payed: number, shortage: number}> = [];

  constructor() { }

  ngOnInit(): void {
  }

}

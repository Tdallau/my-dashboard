import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-total-cell',
  templateUrl: './total-cell.component.html',
  styleUrls: ['./total-cell.component.scss']
})
export class TotalCellComponent implements OnInit {
  @Input() isMoney: boolean;
  @Input() title: string;
  @Input() value: number;

  constructor() { }

  ngOnInit(): void {
  }

}

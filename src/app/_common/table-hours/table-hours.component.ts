import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/nl';

@Component({
  selector: 'app-table-hours',
  templateUrl: './table-hours.component.html',
  styleUrls: ['./table-hours.component.scss']
})
export class TableHoursComponent implements OnInit {
  @Input() table: Array<{date: Date, start: Date, end: Date, break: Date  }>;

  constructor() {
    moment.locale('nl')
  }

  ngOnInit(): void {
  }

  getDate(date: Date) {
    return moment(date).format('DD MMMM YYYY')
  }

  getHours(date: Date) {
    return moment(date).format('HH:mm');
  }

  getTotalHours(row: {date: Date, start: Date, end: Date, break: Date  }) {
    const startHour = row.start.getHours();
    const startMinutes = row.start.getMinutes();
    const endHour = row.end.getHours();
    const endMinutes = row.end.getMinutes();
    const breakHours = row.break.getHours();
    const breakMinutes = row.break.getMinutes();

    const breakTotal = breakHours + (breakMinutes / 60);
    const houres = endHour - startHour;
    const minutes = endMinutes - startMinutes;
    const total = houres + (minutes / 60);
    
    return total - breakTotal;
  }

}

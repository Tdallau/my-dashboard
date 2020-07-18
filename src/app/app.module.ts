import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TotalCellComponent } from './_common/total-cell/total-cell.component';
import { LineChartComponent } from './_common/line-chart/line-chart.component';
import { BarChartComponent } from './_common/bar-chart/bar-chart.component';

import { ChartsModule } from "@rinminase/ng-charts";
import { TableComponent } from './_common/table/table.component';
import { TableHoursComponent } from './_common/table-hours/table-hours.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TotalCellComponent,
    LineChartComponent,
    BarChartComponent,
    TableComponent,
    TableHoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

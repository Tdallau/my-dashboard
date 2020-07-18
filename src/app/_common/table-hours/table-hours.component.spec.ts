import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHoursComponent } from './table-hours.component';

describe('TableHoursComponent', () => {
  let component: TableHoursComponent;
  let fixture: ComponentFixture<TableHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

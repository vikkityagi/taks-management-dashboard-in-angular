import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTaskProgressComponent } from './employee-task-progress.component';

describe('EmployeeTaskProgressComponent', () => {
  let component: EmployeeTaskProgressComponent;
  let fixture: ComponentFixture<EmployeeTaskProgressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeTaskProgressComponent]
    });
    fixture = TestBed.createComponent(EmployeeTaskProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CEmployeeComponent } from './c-employee.component';

describe('CEmployeeComponent', () => {
  let component: CEmployeeComponent;
  let fixture: ComponentFixture<CEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

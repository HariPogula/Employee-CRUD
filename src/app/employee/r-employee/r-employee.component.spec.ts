import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { REmployeeComponent } from './r-employee.component';

describe('REmployeeComponent', () => {
  let component: REmployeeComponent;
  let fixture: ComponentFixture<REmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ REmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(REmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

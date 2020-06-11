import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { REmployeeComponent } from './r-employee/r-employee.component';
import { CEmployeeComponent } from './c-employee/c-employee.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [REmployeeComponent, CEmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [REmployeeComponent, CEmployeeComponent],
})
export class EmployeeModule {}

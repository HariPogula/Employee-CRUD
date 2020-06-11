import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { REmployeeComponent } from './r-employee/r-employee.component';
import { CEmployeeComponent } from './c-employee/c-employee.component';

const routes: Routes = [
  { path: '', component: REmployeeComponent },
  // { path: 'home', component: REmployeeComponent },
  { path: 'create/employee', component: CEmployeeComponent },
  { path: 'edit/employee/:id', component: CEmployeeComponent },

  // { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}

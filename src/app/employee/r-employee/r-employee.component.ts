import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/employee.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-r-employee',
  templateUrl: './r-employee.component.html',
  styleUrls: ['./r-employee.component.scss'],
})
export class REmployeeComponent implements OnInit {
  newEmployee: any = {};
  employees: Employee[] = [];
  constructor(
    private empService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // this.route.queryParams.subscribe((a: Employee) => {
    //   console.log('a:' + JSON.stringify(a));
    //   this.newEmployee = a;
    // });
  }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees() {
    //this.employees.push(this.newEmployee);

    this.empService.getEmployees().subscribe((e) => (this.employees = e));
  }

  createEmployee() {
    this.router.navigate(['/create/employee']);
  }

  updateEmployee(item) {}
}

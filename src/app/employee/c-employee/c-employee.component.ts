import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from 'src/app/employee.service';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/alertify.service';

import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-c-employee',
  templateUrl: './c-employee.component.html',
  styleUrls: ['./c-employee.component.scss'],
})
export class CEmployeeComponent implements OnInit {
  empForm: FormGroup;
  btnLbl: string = 'Add Employee';
  constructor(
    private fb: FormBuilder,
    private empployeeService: EmployeeService,
    private router: Router,
    private alertify: AlertifyService
  ) {}

  ngOnInit(): void {
    this.empForm = this.fb.group({
      id: [Math.floor(1000 + Math.random() * 9000)],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: [
        '',
        [
          Validators.required,
          // Validators.minLength(10),
          // Validators.maxLength(100),
        ],
      ],
      active: [true],
    });
  }

  addEmployee() {
    console.log('Form Value:' + this.empForm.value);
    // this.router.navigate(['/'], {
    //   queryParams: {
    //     ...this.empForm.value,
    //   },
    //   skipLocationChange: true,
    // });

    // this.router.navigate(['/']);
    //     this.alertify.successMessage('Employee Adeed Succesfully');
    this.empployeeService.addEmployee(this.empForm.value).subscribe(() => {
      this.router.navigate(['/']);
      this.alertify.successMessage('Employee Adeed Succesfully');
      return false;
    }),
      (err) => {
        console.log('Some errors');
      };
  }
}

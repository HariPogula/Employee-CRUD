import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';
import { AlertifyService } from './alertify.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private _url = 'http://localhost:3000/';
  constructor(
    private http: HttpClient,
    private alertify: AlertifyService,
    private router: Router
  ) {}
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this._url + 'employees');
  }

  getEmployeeById(id: number) {}

  addEmployee(employee) {
    return this.http.post(this._url + 'employees', employee);
  }

  editEmployee(id, employee) {}
}

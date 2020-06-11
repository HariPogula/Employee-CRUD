import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root',
})
export class AlertifyService {
  constructor() {}

  successMessage(message) {
    alertify.success(message);
  }
  errorMessage(message) {
    alertify.error(message);
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Userservice } from '../../services/userservice/userservice';
import { Router } from '@angular/router';
import { ILogin } from '../../models/ilogin';
import { Notificationservice } from '../../services/toastrNotificationService/notificationservice';
import { Authservice } from '../../services/authservice/authservice';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'], // Can reuse adduser.css as login.css
})
export class Login {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(
    private _authService: Authservice,
    private _router: Router,
    private _notificationService: Notificationservice
  ) {}

  onSubmit() {
    if (this.loginForm.valid) {
      const loginData: ILogin = this.loginForm.value as ILogin;
      this._authService.login(loginData).subscribe({
        next: () => {
          this._router.navigateByUrl('/home');
          this._notificationService.success('Login successful', 'success');
        },
        error: () => {
           this._router.navigateByUrl('/home');
          this._notificationService.error('Login failed', 'error');
        },
      });
    }
  }

  cancelLogin() {
    this._router.navigateByUrl('/home');
  }
}

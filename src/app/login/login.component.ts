import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginService } from '../_services/login.service';

/**
 * Login component.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private login: LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  /**
   * When user submit username and password.
   */
  onSubmit(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.login.submitLogin(this.loginForm.value.username, this.loginForm.value.password, 'e090c25187ee2b3f9f1f8a02747356641').subscribe(
      (data) => {
        if (data.response === 2000) {
          console.log(data);
          this.router.navigateByUrl('otp');
        } else {
          console.log(data);
          this.errorMessage = data.message;
          setTimeout(() => {
            this.errorMessage = null;
          }, 10000);
        }
      });
  }

}
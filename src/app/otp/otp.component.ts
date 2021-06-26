import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginService } from '../_services/login.service';

/**
 * Otp component.
 */
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private login: LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      otp: ['', Validators.required]
    });
  }

  /**
   * When user submit otp.
   */
  onSubmit(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.login.submitOtp('e090c25187ee2b3f9f1f8a02747356641', 'e090c25187ee2j890890skjb3f9f1f8a027r7kjd99', this.loginForm.value.otp)
      .subscribe(
        (data) => {
          console.log(data);
          this.router.navigateByUrl('dashboard');
        });
    this.loading = true;
  }

}

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

  otpForm: FormGroup;
  loading = false;
  submitted = false;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private login: LoginService) { }

  ngOnInit(): void {
    this.otpForm = this.formBuilder.group({
      otp: ['', Validators.required]
    });
  }

  /**
   * When user submit otp.
   */
  onSubmit(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.otpForm.invalid) {
      return;
    }

    this.login.submitOtp('e090c25187ee2b3f9f1f8a02747356641', 'e090c25187ee2j890890skjb3f9f1f8a027r7kjd99', this.otpForm.value.otp)
      .subscribe(
        (data) => {
          if (data.response === 2000) {
            this.router.navigateByUrl('dashboard');
          } else {
            this.errorMessage = data.message;
            setTimeout(() => {
              this.errorMessage = null;
            }, 10000);
          }
        });

  }

}

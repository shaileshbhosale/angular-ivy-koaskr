import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { PasswordValidation } from './password-validator';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true, displayDefaultIndicatorType: false}
  }]
})
export class SetPasswordComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: PasswordValidation.MatchPassword
    });
  }
}

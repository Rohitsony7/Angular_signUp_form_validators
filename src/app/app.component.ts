import { Component, OnInit } from '@angular/core';
import {
  AbstractControlOptions,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { passwordChecker } from './custom-validators/password-checker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'signup-reactive';
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        acceptTandC: ['', Validators.required],
      },
      {
        validators: passwordChecker('password', 'confirmPassword'),
      }
    );
  }

  submitted: boolean = false;

  ngOnInit() {}

  get h() {
    return this.registerForm.controls;
  }

  onReset() {
    this.submitted = false;

    this.registerForm.reset();
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.valid) {
      return;
    }

    console.log(this.registerForm);
    console.table(this.registerForm.value);
  }
}

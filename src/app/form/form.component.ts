import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  formRegister!: FormGroup;
  user!: User;
  formResult: string = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formRegister = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: [''],
    });
  }

  submitForm() {
    if (this.formRegister.dirty && this.formRegister.valid) {
      this.user = Object.assign({}, this.user, this.formRegister);
      this.formResult = JSON.stringify(this.formRegister.value);
    }
  }
}

export interface User {
  name: string;
  email: string;
}

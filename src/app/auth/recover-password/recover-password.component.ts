import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { lanjuage } from 'src/app/helpers/languaje';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css'],
})
export class RecoverPasswordComponent implements OnInit {
  idiom = new lanjuage();
  formSubmitted = false;
  public resetForm = this.fb.group({
    email: [
      localStorage.getItem('email') || '',
      [Validators.email, Validators.required],
    ],
  });

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {}

  recoverPassword() {
    this.formSubmitted = true;
    if (this.resetForm.invalid) return console.log('Formulario con errores');

    this.router.navigateByUrl('/login');
  }
}

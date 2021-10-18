import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { countryList } from '../configuration/config';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  countries = countryList;
  submitted = false;
  showMessage = false;
  successMessage = 'Your account has been created';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      phoneNo: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      country: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    this.showMessage = false;
    if (this.registerForm.valid) {
      this.showMessage = true;
    }
  }
}

import { ComponentFixture, TestBed, waitForAsync, } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,
        FormsModule],
      declarations: [RegistrationComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test the input formgroup element count', () => {
    const formElement = fixture.debugElement.nativeElement.querySelector('#registerForm');
    const inputElements = formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(3);

  });
  it('test the initial form values for the Register form group', () => {
    const registerFormGroup = component.registerForm;
    const registerFormValues = {
      firstName: '',
      lastName: '',
      phoneNo: '',
      country: ''
    };
    expect(registerFormGroup.value).toEqual(registerFormValues);

  });

  it('form invalid when empty', () => {
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('test Registration form  field validity initially', () => {
    const firstName = component.registerForm.controls.firstName;
    const lastName = component.registerForm.controls.lastName;
    const phoneNo = component.registerForm.controls.phoneNo;
    const country = component.registerForm.controls.country;
    expect(firstName.valid).toBeFalsy();
    expect(lastName.valid).toBeFalsy();
    expect(phoneNo.valid).toBeFalsy();
    expect(country.valid).toBeFalsy();

  });

  it('First Name field validity', () => {
    let errors = {};
    const firstName = component.registerForm.controls.firstName;
    errors = firstName.errors || {};
    expect(errors[`required`]).toBeTruthy();

    // Set first name to something incorrect
    firstName.setValue('abc');
    errors = firstName.errors || {};
    expect(errors[`required`]).toBeFalsy();
    expect(errors[`minlength`]).toBeTruthy();

    // Set last name to something correct
    firstName.setValue('raturi');
    errors = firstName.errors || {};
    expect(errors[`required`]).toBeFalsy();
    expect(errors[`minlength`]).toBeFalsy();
  });

  it('last Name field validity', () => {
    let errors = {};
    const lastName = component.registerForm.controls.lastName;
    errors = lastName.errors || {};
    expect(errors[`required`]).toBeTruthy();


    // Set last name to something incorrect
    lastName.setValue('nid');
    errors = lastName.errors || {};
    expect(errors[`required`]).toBeFalsy();
    expect(errors[`minlength`]).toBeTruthy();

    // Set last name to something correct
    lastName.setValue('raturi');
    errors = lastName.errors || {};
    expect(errors[`required`]).toBeFalsy();
    expect(errors[`minlength`]).toBeFalsy();
  });

  it('Phone Number field validity', () => {
    let errors = {};
    const phoneNo = component.registerForm.controls.phoneNo;
    errors = phoneNo.errors || {};
    expect(errors[`required`]).toBeTruthy();

    // Set phone Number to something incorrect
    phoneNo.setValue('ahhjcc');
    errors = phoneNo.errors || {};
    expect(errors[`required`]).toBeFalsy();
    expect(errors[`pattern`]).toBeTruthy();

    // Set email to something correct
    phoneNo.setValue('1234567893');
    errors = phoneNo.errors || {};
    expect(errors[`required`]).toBeFalsy();
    expect(errors[`pattern`]).toBeFalsy();

  });

  it('should call onSubmit() on click', waitForAsync(() => {
    spyOn(component, 'onSubmit');

    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.onSubmit).toHaveBeenCalled();
    });
  }));

  it('should check Registration form is submitted', () => {
    expect(component.registerForm.invalid).toBeTruthy();
    component.registerForm.controls.firstName.setValue('nidhi');
    component.registerForm.controls.lastName.setValue('raturi');
    component.registerForm.controls.phoneNo.setValue('1234567896');
    component.registerForm.controls.country.setValue('India');
    fixture.detectChanges();
    component.onSubmit();
    fixture.detectChanges();
    const successSpan = fixture.debugElement.query(By.css('.success-msg')).nativeElement.innerText;
    expect(successSpan).toBe('Your account has been created');

  });


});

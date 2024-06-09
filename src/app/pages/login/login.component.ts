import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PatternValidatorsService } from '../../shared/services/patternValidators/pattern-validators.service';
import { ConfirmPasswordService } from '../../shared/services/confirmPassword/consfirm-password.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({}); // Valor inicial vazio
  isSignedIn = false;
  siteKey = '6Lc6tWclAAAAAFeRdj952i55fLgWgaoDuqST8EBA';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildloginForm();
  }

  // register form
  buildloginForm() {
    this.loginForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.compose([
              Validators.required,
              PatternValidatorsService.patternValidators(/\d/, {
                hasNumber: true,
              }),
              PatternValidatorsService.patternValidators(/[A-Z]/, {
                hasCapitalCase: true,
              }),
              PatternValidatorsService.patternValidators(/[a-z]/, {
                hasSmallCase: true,
              }),
              PatternValidatorsService.patternValidators(
                /[!@#$%^&*()-+=~{}[\]|\\:;"'<>,.?/]/,
                {
                  hasSpecialCharacters: true,
                }
              ),
              Validators.minLength(8),
            ]),
          ],
        ],
        confirm_password: [
          '',
          [
            Validators.compose([
              Validators.required,
              PatternValidatorsService.patternValidators(/\d/, {
                hasNumber: true,
              }),
              PatternValidatorsService.patternValidators(/[A-Z]/, {
                hasCapitalCase: true,
              }),
              PatternValidatorsService.patternValidators(/[a-z]/, {
                hasSmallCase: true,
              }),
              PatternValidatorsService.patternValidators(
                /[!@#$%^&*()-+=~{}[\]|\\:;"'<>,.?/]/,
                {
                  hasSpecialCharacters: true,
                }
              ),
              Validators.minLength(8),
            ]),
          ],
        ],
      },
      { validator: ConfirmPasswordService.MatchingPassword }
    );
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  get confirm_password() {
    return this.loginForm.get('confirm_password');
  }

  // form validation
  isFormValid: boolean = false;
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);

    if (captchaResponse != null) {
      this.isFormValid = true;
    }
  }

  // submit data
  onSubmit() {}
}

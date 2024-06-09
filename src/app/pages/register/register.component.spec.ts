import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './register.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize login form', () => {
    expect(component.loginForm).toBeDefined();
    expect(component.loginForm.get('email')).toBeDefined();
    expect(component.loginForm.get('password')).toBeDefined();
    expect(component.loginForm.get('confirm_password')).toBeDefined();
  });

  it('should have email, password, and confirm_password fields required', () => {
    const emailControl = component.loginForm.get('email')!;
    const passwordControl = component.loginForm.get('password')!;
    const confirmPasswordControl = component.loginForm.get('confirm_password')!;

    emailControl.setValue('');
    passwordControl.setValue('');
    confirmPasswordControl.setValue('');

    expect(emailControl.valid).toBeFalsy();
    expect(passwordControl.valid).toBeFalsy();
    expect(confirmPasswordControl.valid).toBeFalsy();
  });

  it('should validate wrong password', () => {
    const passwordControl = component.loginForm.get('password')!;
    passwordControl.setValue('pass');

    expect(passwordControl.valid).toBeFalsy();
    expect(passwordControl.hasError('hasNumber')).toBeTruthy();
    expect(passwordControl.hasError('hasCapitalCase')).toBeTruthy();
    expect(passwordControl.hasError('hasSmallCase')).toBeFalsy();
    expect(passwordControl.hasError('hasSpecialCharacters')).toBeTruthy();
    expect(passwordControl.hasError('minlength')).toBeTruthy();
  });

  it('should validate valid password', () => {
    const passwordControl = component.loginForm.get('password')!;
    passwordControl.setValue('pA$word1');

    expect(passwordControl.valid).toBeTruthy();
    expect(passwordControl.hasError('hasNumber')).toBeFalsy();
    expect(passwordControl.hasError('hasCapitalCase')).toBeFalsy();
    expect(passwordControl.hasError('hasSmallCase')).toBeFalsy();
    expect(passwordControl.hasError('hasSpecialCharacters')).toBeFalsy();
    expect(passwordControl.hasError('minlength')).toBeFalsy();
  });
});

import { TestBed } from '@angular/core/testing';
import { FormControl, ValidationErrors } from '@angular/forms';
import { PatternValidatorsService } from './pattern-validators.service';

describe('PatternValidatorsService', () => {
  let patternValidatorsService: PatternValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    patternValidatorsService = TestBed.inject(PatternValidatorsService);
  });

  it('should be created', () => {
    expect(patternValidatorsService).toBeTruthy();
  });

  it('should return null if control is empty', () => {
    const validatorFn = PatternValidatorsService.patternValidators(/\d/, { hasNumber: true });
    const control = new FormControl('');
    const validationResult = validatorFn(control);

    expect(validationResult).toBeNull();
  });

  it('should return null if value matches the regex', () => {
    const validatorFn = PatternValidatorsService.patternValidators(/\d/, { hasNumber: true });
    const control = new FormControl('1234');
    const validationResult = validatorFn(control);

    expect(validationResult).toBeNull();
  });

  it('should return error if value does not match the regex', () => {
    const validatorFn = PatternValidatorsService.patternValidators(/\d/, { hasNumber: true });
    const control = new FormControl('abcd');
    const validationResult = validatorFn(control);

    expect(validationResult).toEqual({ hasNumber: true });
  });

  it('should return null if value matches a complex regex', () => {
    const validatorFn = PatternValidatorsService.patternValidators(/^(?=.*[A-Z])(?=.*\d).+$/, { complexPattern: true });
    const control = new FormControl('Password1$');
    const validationResult = validatorFn(control);

    expect(validationResult).toBeNull();
  });

  it('should return error if value does not match a complex regex', () => {
    const validatorFn = PatternValidatorsService.patternValidators(/^(?=.*[A-Z])(?=.*\d).+$/, { complexPattern: true });
    const control = new FormControl('password');
    const validationResult = validatorFn(control);

    expect(validationResult).toEqual({ complexPattern: true });
  });
});

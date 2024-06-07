import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class PatternValidatorsService {
  static patternValidators(
    regex: RegExp,
    error: ValidationErrors
  ): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        // if control is empty, return no error
        return null;
      }
      // test the value of the control against the supplied regex
      const valid = regex.test(control.value);

      // if true, return no error, else, return the passed error in the second parameter
      return valid ? null : error;
    };
  }
}

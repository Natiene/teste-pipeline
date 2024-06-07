// import { Injectable } from '@angular/core';
// import { AbstractControl, ValidationErrors } from '@angular/forms';

// @Injectable({
//   providedIn: 'root',
// })
// export class ConsfirmPasswordService {
//   static MatchingPassword(control: AbstractControl) {
//     const password = control.get('password')?.value;
//     const confirmPassword = control.get('confirm_password').value;
//     const currentErrors = control.get('confirm_password').errors;
//     const confirmControl = control.get('confirm_password');

//     if (compare(password, confirmPassword)) {
//       confirmControl?.setErrors({ ...currentErrors, not_matching: true });
//     } else {
//       confirmControl?.setErrors(currentErrors);
//     }
//   }
// }

// function compare(password: string, confirmPassword: string) {
//   return password !== confirmPassword && confirmPassword !== '';
// }

import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ConfirmPasswordService {
  static MatchingPassword(control: AbstractControl): ValidationErrors | null {
    const passwordControl = control.get('password');
    const confirmPasswordControl = control.get('confirm_password');

    if (!passwordControl || !confirmPasswordControl) {
      return null; // If controls are not found, return null
    }

    const password = passwordControl.value;
    const confirmPassword = confirmPasswordControl.value;
    const currentErrors = confirmPasswordControl.errors || {};

    if (compare(password, confirmPassword)) {
      confirmPasswordControl.setErrors({
        ...currentErrors,
        not_matching: true,
      });
    } else {
      delete currentErrors['not_matching'];
      if (Object.keys(currentErrors).length === 0) {
        confirmPasswordControl.setErrors(null);
      } else {
        confirmPasswordControl.setErrors(currentErrors);
      }
    }

    return null; // Return null for the group validation error
  }
}

function compare(password: string, confirmPassword: string): boolean {
  return password !== confirmPassword && confirmPassword !== '';
}

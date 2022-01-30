// import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function passwordChecker(
  controlName: string,
  compareControlName: string
) {
  return (controls: AbstractControl): ValidationErrors | null => {
    if (controls) {
      const password = controls.get(controlName);
      const confirmPassowrd = controls.get(compareControlName);

      if (password?.value !== confirmPassowrd?.value) {
        confirmPassowrd?.setErrors({ mismatch: true });
        return { mismatch: true };
      } else {
        confirmPassowrd?.setErrors(null);
        // return { mismatch: false };
      }
    }
    return null;
  };
}

// export const passwordChecker: ValidatorFn = (
//   control: AbstractControl
// ): ValidationErrors | null => {
//   const name = control.get('password');
//   const alterEgo = control.get('confirmPassword');

//   console.log(name, '', alterEgo);

//   return name && alterEgo && name.value === alterEgo.value
//     ? { mismatch: true }
//     : null;
// };

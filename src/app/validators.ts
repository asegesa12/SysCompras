import { AbstractControl, ValidationErrors } from '@angular/forms';

export function dominicanIdValidator(control: AbstractControl): ValidationErrors | null {
  const value: string = control.value;

  // Check if the ID matches the format (11 digits followed by one letter)
  if (!/^\d{11}[A-Z]$/i.test(value)) {
    return { dominicanIdFormat: true };
  }

  // Calculate the checksum
  const idDigits = value.substr(0, 11);
  const idLetter = value.charAt(11).toUpperCase();
  const weights = [7, 9, 8, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < 8; i++) {
    sum += parseInt(idDigits.charAt(i), 10) * weights[i];
  }

  const remainder = sum % 11;
  const expectedLetter = remainder === 10 ? 'K' : remainder.toString();

  if (expectedLetter !== idLetter) {
    return { dominicanIdChecksum: true };
  }

  return null;
}



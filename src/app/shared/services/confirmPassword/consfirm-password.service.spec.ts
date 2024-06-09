import { TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { ConfirmPasswordService } from './consfirm-password.service';

describe('ConfirmPasswordService', () => {
  let service: ConfirmPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmPasswordService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should validate that passwords match', () => {
    const formGroup = new FormGroup({
      password: new FormControl('password123'),
      confirm_password: new FormControl('password123')
    });

    const validationResult = ConfirmPasswordService.MatchingPassword(formGroup);
    expect(validationResult).toBeNull();
    expect(formGroup.get('confirm_password')?.errors).toBeNull();
  });

  it('should validate that passwords do not match', () => {
    const formGroup = new FormGroup({
      password: new FormControl('password123'),
      confirm_password: new FormControl('differentpassword')
    });

    const validationResult = ConfirmPasswordService.MatchingPassword(formGroup);
    expect(validationResult).toBeNull();
    expect(formGroup.get('confirm_password')?.errors).toEqual({ not_matching: true });
  });

  it('should validate that passwords do not match and confirm password is empty', () => {
    const formGroup = new FormGroup({
      password: new FormControl('password123'),
      confirm_password: new FormControl('')
    });

    const validationResult = ConfirmPasswordService.MatchingPassword(formGroup);
    expect(validationResult).toBeNull();
    expect(formGroup.get('confirm_password')?.errors).toBeNull();
  });

  it('should handle when controls are not found', () => {
    const formGroup = new FormGroup({
      password: new FormControl('password123'),
    });

    const validationResult = ConfirmPasswordService.MatchingPassword(formGroup);
    expect(validationResult).toBeNull();
    expect(formGroup.get('confirm_password')).toBeNull();
  });
});

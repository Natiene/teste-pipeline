import { TestBed } from '@angular/core/testing';

import { ConsfirmPasswordService } from './consfirm-password.service';

describe('ConsfirmPasswordService', () => {
  let service: ConsfirmPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsfirmPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

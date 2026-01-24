import { TestBed } from '@angular/core/testing';

import { SpinnerloadingService } from './spinnerloadingservice';

describe('Spinnerloading', () => {
  let service: Spinnerloading;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerloadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

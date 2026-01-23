import { TestBed } from '@angular/core/testing';

import { Spinnerloading } from './spinnerloading';

describe('Spinnerloading', () => {
  let service: Spinnerloading;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Spinnerloading);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

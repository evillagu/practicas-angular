import { TestBed } from '@angular/core/testing';

import { FromExampleService } from './from-example.service';

describe('FromExampleService', () => {
  let service: FromExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FromExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

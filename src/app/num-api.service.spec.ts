import { TestBed } from '@angular/core/testing';

import { NumApiService } from './num-api.service';

describe('NumApiService', () => {
  let service: NumApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

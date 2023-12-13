import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { studentGGuard } from './student-g.guard';

describe('studentGGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => studentGGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

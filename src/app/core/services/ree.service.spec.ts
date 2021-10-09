import { TestBed } from '@angular/core/testing';

import { ReeService } from './ree.service';

describe('ReeService', () => {
  let service: ReeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

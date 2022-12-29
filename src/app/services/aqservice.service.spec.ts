import { TestBed } from '@angular/core/testing';

import { AQServiceService } from './aqservice.service';

describe('AQServiceService', () => {
  let service: AQServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AQServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

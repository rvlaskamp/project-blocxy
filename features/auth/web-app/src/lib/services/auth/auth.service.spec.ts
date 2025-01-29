import { TestBed } from '@angular/core/testing';

import { FeatureAuthService } from './auth.service';

describe('FeatureAuthService', () => {
  let service: FeatureAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

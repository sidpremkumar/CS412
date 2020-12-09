import { TestBed } from '@angular/core/testing';

import { cvService } from './cv.service';

describe('cvService', () => {
  let service: cvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(cvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

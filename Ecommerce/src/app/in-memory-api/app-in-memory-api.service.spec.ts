import { TestBed } from '@angular/core/testing';

import { AppInMemoryApiService } from './app-in-memory-api.service';

describe('AppInMemoryApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppInMemoryApiService = TestBed.get(AppInMemoryApiService);
    expect(service).toBeTruthy();
  });
});

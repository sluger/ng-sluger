import { TestBed, inject } from '@angular/core/testing';

import { JsonLoaderService } from './json-loader.service';

describe('JsonLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonLoaderService]
    });
  });

  it('should ...', inject([JsonLoaderService], (service: JsonLoaderService) => {
    expect(service).toBeTruthy();
  }));
});

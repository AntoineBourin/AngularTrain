import { TestBed } from '@angular/core/testing';

import { YoutubePaginationService } from './youtube-pagination.service';

describe('YoutubePaginationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YoutubePaginationService = TestBed.get(YoutubePaginationService);
    expect(service).toBeTruthy();
  });
});

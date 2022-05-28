import { TestBed } from '@angular/core/testing';

import { ApiAnimeService } from './api-anime.service';

describe('ApiAnimeService', () => {
  let service: ApiAnimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAnimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

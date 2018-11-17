import { TestBed } from '@angular/core/testing';

import { YoutubeChannelService } from './youtube-channel.service';

describe('YoutubeChannelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YoutubeChannelService = TestBed.get(YoutubeChannelService);
    expect(service).toBeTruthy();
  });
});

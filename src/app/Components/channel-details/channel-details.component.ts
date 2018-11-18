import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { YoutubeChannelService } from '../../Services/youtube-channel.service';
import { Playlist } from '../../Normalizer/playlist';
import {YoutubePaginationService} from '../../Services/youtube-pagination.service';

@Component({
  selector: 'app-channel-details',
  templateUrl: './channel-details.component.html',
  styleUrls: ['./channel-details.component.scss']
})
export class ChannelDetailsComponent implements OnInit {
  channelId: string;
  fetchingDetails = true;
  maxPlaylistsPerPage = 3;
  playlistResultsNumber: number;
  playlists: Playlist[] = [];
  constructor(private route: ActivatedRoute, private youtube: YoutubeChannelService, protected pagination: YoutubePaginationService) { }

  ngOnInit() {
    this.channelId = this.route.snapshot.paramMap.get('id');
    this.loadChannelData();
  }
  protected loadChannelData(): void {
    this.youtube.getPlaylistsForChannel(this.channelId, this.maxPlaylistsPerPage, this.pagination.getNextPageToken())
      .subscribe(response => {
        response.items.forEach(item => this.playlists.push(item));
        this.pagination.setNextPageToken(response.nextPageToken ? response.nextPageToken : '');
        this.playlistResultsNumber = response.pageInfo.totalResults;
        this.fetchingDetails = false;
      });
  }
}

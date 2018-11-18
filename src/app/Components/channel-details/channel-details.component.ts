import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { YoutubeChannelService } from '../../Services/youtube-channel.service';
import { Playlist } from '../../Normalizer/playlist';

@Component({
  selector: 'app-channel-details',
  templateUrl: './channel-details.component.html',
  styleUrls: ['./channel-details.component.scss']
})
export class ChannelDetailsComponent implements OnInit {
  channelId: string;
  fetchingDetails = true;
  maxPlaylistsPerPage = 3;
  nextPageToken = '';
  playlistResultsNumber: number;
  playlists: Playlist[] = [];
  constructor(private route: ActivatedRoute, private youtube: YoutubeChannelService) { }

  ngOnInit() {
    this.channelId = this.route.snapshot.paramMap.get('id');
    this.loadChannelData();
  }
  protected loadChannelData(): void {
    this.youtube.getPlaylistsForChannel(this.channelId, this.maxPlaylistsPerPage, this.nextPageToken).subscribe(response => {
      response.items.forEach(item => this.playlists.push(item));
      this.nextPageToken = response.nextPageToken ? response.nextPageToken : '';
      this.playlistResultsNumber = response.pageInfo.totalResults;
      this.fetchingDetails = false;
    });
  }
}

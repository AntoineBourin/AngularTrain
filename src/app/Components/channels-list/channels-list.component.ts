import {Component, OnInit} from '@angular/core';
import { YoutubeChannelService } from '../../Services/youtube-channel.service';
import { Channel } from '../../Normalizer/channel';

@Component({
  selector: 'app-channels-list',
  templateUrl: './channels-list.component.html',
  styleUrls: ['./channels-list.component.scss']
})
export class ChannelsListComponent implements OnInit {
  youtubeUsername: string;
  channelsList: Channel[];
  fetchingChannels: boolean;
  constructor(private channels: YoutubeChannelService) { }

  ngOnInit() {
  }

  public updateUsername(username: string): void {
    this.youtubeUsername = username;
    this.fetchingChannels = true;
    this.channelsList = [];
    if (username) {
      this.channels.getLastVideos(username, 3).subscribe(result => {
        result.items.forEach(item => {
          this.channelsList.push(item);
        });
        this.fetchingChannels = false;
      });
    }
  }

}

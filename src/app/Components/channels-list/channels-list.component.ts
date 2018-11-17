import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { YoutubeChannelService } from '../../Services/youtube-channel.service';
import { Channel } from '../../Normalizer/channel';

@Component({
  selector: 'app-channels-list',
  templateUrl: './channels-list.component.html',
  styleUrls: ['./channels-list.component.scss']
})
export class ChannelsListComponent implements OnInit, OnChanges {
  @Input() search: string;
  channelsList: Channel[];
  fetchingChannels: boolean;
  constructor(private channels: YoutubeChannelService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.fetchingChannels = true;
    this.channelsList = [];
    this.channels.getLastVideos(this.search, 3).subscribe(result => {
      result.items.forEach(item => {
        this.channelsList.push(item);
      });
      this.fetchingChannels = false;
    });
  }

}

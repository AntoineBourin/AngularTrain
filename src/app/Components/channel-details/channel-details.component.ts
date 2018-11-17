import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-channel-details',
  templateUrl: './channel-details.component.html',
  styleUrls: ['./channel-details.component.scss']
})
export class ChannelDetailsComponent implements OnInit {
  channelId: string;
  fetchingDetails = true;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.channelId = this.route.snapshot.paramMap.get('id');
  }
}

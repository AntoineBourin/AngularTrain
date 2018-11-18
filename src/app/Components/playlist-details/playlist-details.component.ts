import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {YoutubeVideosService} from '../../Services/youtube-videos.service';
import {YoutubePaginationService} from '../../Services/youtube-pagination.service';
import {Video} from '../../Normalizer/video';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss']
})
export class PlaylistDetailsComponent implements OnInit {
  thumbnailPreference: boolean = false;
  playlistId: string;
  videosList: Video[] = [];
  maxVideosPerPage = 3;
  constructor
  (private route: ActivatedRoute,
   private youtubeVideos: YoutubeVideosService,
   private pagination: YoutubePaginationService,
   private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.playlistId = this.route.snapshot.paramMap.get('id');
    this.retrievePlaylistVideos();
  }
  protected retrievePlaylistVideos(): void {
    this.youtubeVideos.getVideosForPlaylist(this.playlistId, this.maxVideosPerPage, this.pagination.getNextPageToken())
      .subscribe(response => {
        this.pagination.setNextPageToken(response.nextPageToken ? response.nextPageToken : '');
        response.items.forEach(item => { this.videosList.push(item)});
        console.log(response);
      });
  }
  protected sanitizeSafeVideoId(videoId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + videoId);
  }

}

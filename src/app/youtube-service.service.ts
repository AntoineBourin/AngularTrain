import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiKey } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class YoutubeServiceService {

  constructor(private http: HttpClient) { }
  public getLastVideos(): void {
    this.http.get('https://www.googleapis.com/youtube/v3/channels',
{
          params: {
            'key': apiKey,
            'id': 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
            'part': 'snippet,contentDetails,statistics'
        }
    }).subscribe(response => console.log(response));
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {apiKey} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeChannelService {

  constructor(private http: HttpClient) { }
  public getChannelForUsername(username: string, maxResults: number): Observable<any> {
    return this.http.get('https://www.googleapis.com/youtube/v3/channels',
      {
        params: {
          'key': apiKey,
          'forUsername': username,
          'part': 'snippet,contentDetails,statistics',
          'maxResults': maxResults.toString(),
        }
      });
  }
  public getPlaylistsForChannel(channelId: string, maxResults: number, pageToken: string): Observable<any> {
    return this.http.get('https://www.googleapis.com/youtube/v3/playlists',
      {
        params: {
          'key': apiKey,
          'channelId': channelId,
          'part': 'snippet,contentDetails',
          'maxResults': maxResults.toString(),
          'pageToken': pageToken,
        }
      });
  }
}

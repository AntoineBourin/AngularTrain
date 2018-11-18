import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {apiKey} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeVideosService {

  constructor(private http: HttpClient) { }
  public getVideosForPlaylist(playlistId: string, maxResults: number, pageToken: string): Observable<any> {
    return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems', {
      params: {
        key: apiKey,
        playlistId: playlistId,
        part: 'snippet,contentDetails',
        maxResults: maxResults.toString(),
        pageToken: pageToken,
      },
    });
  }
}

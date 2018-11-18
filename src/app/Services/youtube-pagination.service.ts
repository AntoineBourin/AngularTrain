import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubePaginationService {
  nextPageToken = '';
  previousPageToken = '';
  constructor() { }
  public setNextPageToken(token: string): void {
    this.nextPageToken = token;
  }
  public getNextPageToken(): string {
    return this.nextPageToken;
  }
  public setPreviousPageToken(token: string): void {
    this.previousPageToken = token;
  }
  public getPreviousPageToken(): string {
    return this.previousPageToken;
  }
}

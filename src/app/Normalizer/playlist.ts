export class Playlist {
  contentDetails: {
    itemCount: number,
  };
  etag: string;
  id: string;
  kind: string;
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    localized: {
      description: string;
      title: string;
    };
    publishedAt: string;
    thumbnails: {
      default: {
        height: number;
        url: string;
        width: number;
      }
    }
  };
}

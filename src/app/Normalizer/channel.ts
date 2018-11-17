export class Channel {
  contentDetails: {
    id: string,
    kind: string
  };
  snippet: {
    customUrl: string,
    description: string,
    publishedAt: string,
    thumbnails: {
      default: {
        url: string,
        width: number,
        height: number,
      },
    },
    title: string,
  };
  statistics: {
    viewCount: string,
    subscriberCount: string,
    videoCount: string,
    commentsCount: string,
  };
  id: string;
}

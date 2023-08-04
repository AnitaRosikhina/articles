export namespace Articles {
  export interface Response {
    count: number;
    results: Item[];
  }

  export interface Item {
    id: number;
    title: string;
    url: string;
    image_url: string;
    summary: string;
    published_at: Date;
  }
}

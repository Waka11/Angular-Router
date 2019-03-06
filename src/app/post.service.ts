import { Input } from "@angular/core";

export class PostService {
  //@ts-ignore
  BlogPost: [{ title: string; id: number; content: string }] = [];
  @Input() Post: [{ title: string; id: number; content: string }];
  OnAddPost(Post) {
    this.BlogPost.push(Post);
  }
}

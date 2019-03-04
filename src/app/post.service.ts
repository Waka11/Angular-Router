import { Input } from "@angular/core";

export class PostService {
  //@ts-ignore
  BlogPost: [{ title: string; id: number; content: string }] = [
    { title: "qqqqq", id: 1, content: "wwwww" },
    { title: "11111", id: 2, content: "22222" }
  ];
  @Input() Post: [{ title: string; id: number; content: string }];
  OnAddPost(Post) {
    this.BlogPost.push(Post);
  }
}

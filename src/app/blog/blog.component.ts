import { Component, OnInit, Input, Output } from "@angular/core";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"]
})
export class BlogComponent implements OnInit {
  //@ts-ignore
  BlogPost: [{ title: string, id: number, content: string  }] = [
    { title: "qqqqq", id: 1, content: "wwwww" },
    { title: "11111", id: 2, content: "22222" }
  ];

  constructor() {}

  ngOnInit() {}
}

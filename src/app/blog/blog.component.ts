import {
  Component,
  OnInit,
  Input,
  Output,
} from "@angular/core";
import { PostService } from "../post.service";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"],
  //providers: [PostService]
})
export class BlogComponent implements OnInit {
  //@ts-ignore
  BlogPost = [];

  title = "";
  id = Math.floor(Math.random() * 101);
  content = "";
  error = "";
  classname = "";

  constructor(private service: PostService) {}

  AddPost() {
    console.log("clicked");
    let object = {
      title: this.title,
      id: this.id,
      content: this.content
    };
    if (this.title === "" || this.content === "") {
      this.error = "Please enter Blog Info!!!";
      this.classname = "alert alert-warning";
      console.log("Рагуль, заповни поля!!!")
    } else {
      this.service.BlogPost.push(object);
      this.id = null;
      this.content = "";
      this.title = "";
      this.error = "";
      this.classname = "";
    }
  }

  ngOnInit() {
    this.BlogPost = this.service.BlogPost;
  }
}

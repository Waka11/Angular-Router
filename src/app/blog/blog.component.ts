import { Component, OnInit } from "@angular/core";
import { PostService } from "../post.service";
import { DatabaseService } from "../database.servise";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"]
})
export class BlogComponent implements OnInit {
  BlogPost = [];

  title = "";
  id = Math.floor(Math.random() * 101);
  content = "";
  error = "";
  classname = "";

  constructor(
    private service: PostService,
    private DBservice: DatabaseService
  ) {}

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
      console.log("Рагуль, заповни поля!!!");
    } else {
      //this.BlogPost.push(object);
      this.DBservice.DataSave(object).subscribe(
        response => console.log(response),
        error => console.log(error)
      );
      this.id = null;
      this.content = "";
      this.title = "";
      this.error = "";
      this.classname = "";
    }
  }

  // SaveToBase() {
  //   this.DBservice.DataSave(this.BlogPost).subscribe(
  //     response => console.log(response),
  //     error => console.log(error)
  //   );
  // }

  ngOnInit() {
  }
}

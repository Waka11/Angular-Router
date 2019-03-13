import { Component, OnInit } from "@angular/core";
import { DocsService } from "../docs.service";

@Component({
  selector: "app-docs",
  templateUrl: "./docs.component.html",
  styleUrls: ["./docs.component.css"]
})
export class DocsComponent implements OnInit {
  constructor(private docsservice: DocsService) {}

  info:any = [];

  ngOnInit() {
    this.docsservice.getData().subscribe(response => {
      // console.log(response);
      this.info = response;
      console.log('INFO',this.info.articles);
    });
    
  }
}

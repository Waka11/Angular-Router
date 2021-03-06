import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  @Input() Posts: [{ title: string, id: number, content: string }];

  
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-docs-item",
  templateUrl: "./docs-item.component.html",
  styleUrls: ["./docs-item.component.css"]
})
export class DocsItemComponent implements OnInit {
  @Input() Infos: [{content:string}];

  constructor() {}

  ngOnInit() {}
}

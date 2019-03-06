import { Component, OnInit } from '@angular/core';
import { RequestService } from "../request.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private reqservice: RequestService) { }

  currency: any =[];

  ngOnInit() {
    this.reqservice.getData().subscribe((response) => {
      console.log(response);
      this.currency = response;
    });
  }

}

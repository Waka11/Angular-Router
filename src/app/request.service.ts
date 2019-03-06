import { Injectable } from "@angular/core";
import {  HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable()

export class RequestService {
    url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
  constructor(private request: HttpClient) {}
  getData(){
     return this.request.get(this.url).map((response: Response)=>{
        return response;
      })
  }
}

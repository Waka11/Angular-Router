import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable()
export class DocsService {
    constructor(private request: HttpClient) { }
    getData() {
        
        return this.request
          .get(
            `https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=b235b608bf1149f5af92f46975273b78`
          )
          .map((response: Response) => {console.log("response", response);
            return response;
          });
          
    }
}
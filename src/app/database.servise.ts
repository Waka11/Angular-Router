import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable()
export class DatabaseService {
  constructor(private http: HttpClient) {}
  FireArr:any = [];
  url = "https://angularblog-dd0f6.firebaseio.com/blog.json";
  DataSave(data: any) {
    console.log(data);
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post(this.url, data, { headers: headers });
  }
  DataGet(URL) {
    this.http.get(URL).subscribe((response: Response) => {
      console.log("RESPONSE", response);
      this.FireArr = response;
      console.log("FIREARR",this.FireArr);
      return response;

    });
    
    
  }
}

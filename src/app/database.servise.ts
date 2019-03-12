import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable()
export class DatabaseService {
  constructor(private http: HttpClient) {}
  url = "https://angularblog-dd0f6.firebaseio.com/blog.json";
  DataSave(data: any) {
    console.log(data);
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post(this.url, data, { headers: headers });
  }
  DataGet() {
    this.http.get(this.url).map((response: Response) => {
      console.log("RESPONSE", response);
      return response;
    });
  }
}

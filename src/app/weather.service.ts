import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable()

export class WeatherService{
    url = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=aa72480049dc531be9c1bd6fc4d3d1f5';
    constructor(private request: HttpClient) { }
    getData() {
        return this.request.get(this.url).map((response: Response) => {
            return response;
        })
    }
}
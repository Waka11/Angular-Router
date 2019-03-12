import { Component, OnInit} from '@angular/core';
import "rxjs/add/operator/map";


import { WeatherService } from "../weather.service";

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  constructor(private weatherservice: WeatherService) { }
  
  selectedCity: string = null;

  onChange(){
    this.weatherservice.getData(this.selectedCity).subscribe((response) => {
      console.log(response);
      this.weatherForecast = response;
      this.degreez = Math.floor(this.weatherForecast.main.temp - 273.15);
      this.weather = this.weatherForecast.weather[0].main;
      this.icon = this.weatherForecast.weather[0].icon;
    });
  }

  weatherForecast:any = {};
  degreez = null;
  weather = '';
  icon = '';

  ngOnInit() {
  }
  

}

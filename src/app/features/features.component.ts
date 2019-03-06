import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../weather.service";


@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  constructor(private weatherservice: WeatherService) { }

  weather:any = {};
  degreez = null;

  ngOnInit() {
    this.weatherservice.getData().subscribe((response) => {
      console.log(response);
      this.weather = response;
      this.degreez = Math.floor(this.weather.main.temp - 273.15);
    });
  }

}

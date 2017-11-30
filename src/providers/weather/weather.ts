import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {

  //API key for Open Weather Map
  apiKey='1a803f8a68ad96818da8d3587a4d11d5';

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
  }

  //Current weather data by latitude and longitude
  getWeather(lat, lon){
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=metric'+'&appid='+this.apiKey)
    .map(res=>res.json());
  }

  //Weather forecast data by latitude and longitude
  getForecast(lat, lon){
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+'&units=metric'+'&appid='+this.apiKey)
    .map(res=>res.json());
  }

}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
  apiKey='1a803f8a68ad96818da8d3587a4d11d5';

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
  }

  getWeather(lat, lon){
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=metric'+'&appid='+this.apiKey)
    .map(res=>res.json());
  }

  getForecast(lat, lon){
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+'&units=metric'+'&appid='+this.apiKey)
    .map(res=>res.json());
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {
  weather: any;
  location: {
    latitude: number,
    longitude: number
  };

  date = new Date().toLocaleString();

  constructor(public navCtrl: NavController, public navParams: NavParams, private weatherProvider: WeatherProvider, private geolocation: Geolocation) {
  }

  ionViewWillEnter(){

    this.geolocation.getCurrentPosition().then((resp)=> {
      const latitude=resp.coords.latitude;
      const longitude=resp.coords.longitude;
      this.weatherProvider.getWeather(latitude, longitude).subscribe(weather=>{
        console.log(weather);
        this.weather = weather;
      });
    }).catch((error)=>{
      console.log('Error getting location', error);
    })

  }
}

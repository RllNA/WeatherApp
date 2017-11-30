import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-forecast',
  templateUrl: 'forecast.html',
})
export class ForecastPage {
  
  // defining variables
  weather: any;
  location: {
    latitude: number,
    longitude: number
  };

  //date = new Date().toLocaleString();

  constructor(public navCtrl: NavController, public navParams: NavParams,private weatherProvider: WeatherProvider, private geolocation: Geolocation) {
  }

 ionViewWillEnter(){

  //Getting location data from the device
    this.geolocation.getCurrentPosition().then((resp)=> {
      const latitude=resp.coords.latitude;
      const longitude=resp.coords.longitude;
       //Using location data from device to get information about weather from provider
      this.weatherProvider.getForecast(latitude, longitude).subscribe(weather=>{
        console.log(weather);
        this.weather = weather;
      });
      //Error log
    }).catch((error)=>{
      console.log('Error getting location', error);
    })

  }

}

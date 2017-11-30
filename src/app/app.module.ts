import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//importing Http for API
import { HttpModule } from '@angular/http';
//importing Geolocation (plugin)
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
//importing weather provider
import { WeatherProvider } from '../providers/weather/weather';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //importing http module
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //adding weatherprovider and geolocation as providers
    WeatherProvider,
    Geolocation
  ]
})
export class AppModule {}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  
  //defining variables
  tab1Root='WeatherPage';
  tab2Root='DetailsPage';
  tab3Root='ForecastPage';
  myIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  //index for tabs
    this.myIndex=navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}

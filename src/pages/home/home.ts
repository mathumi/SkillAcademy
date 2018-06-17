import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;


  constructor(public navCtrl: NavController) {
  }
  openPage(page) {
    console.log(page);
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.setRoot("ListPage");
  }

}

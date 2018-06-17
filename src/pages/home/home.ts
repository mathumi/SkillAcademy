import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';
import {ContactUsPage} from'../contact-us/contact-us';
import {TrainingsPage} from'../trainings/trainings';
import {TestimonialPage} from'../testimonial/testimonial';
import {AboutUsPage} from'../about-us/about-us';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: NavController;


  constructor(public navCtrl: NavController) {
  }
  pushContact() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(ContactUsPage);
  }
  pushTraining(){
    this.navCtrl.push(TrainingsPage);
  }
  pushTestimonial(){
    this.navCtrl.push(TestimonialPage);
  }
  pushAbout(){
    this.navCtrl.push(AboutUsPage);
    
  }

}

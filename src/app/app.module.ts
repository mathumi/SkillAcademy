import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { TrainingsPage } from '../pages/trainings/trainings';
import { TestimonialPage } from '../pages/testimonial/testimonial';
import { AboutUsPage } from '../pages/about-us/about-us';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactUsPage,
    TrainingsPage,
    TestimonialPage,
    ContactUsPage,
    AboutUsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactUsPage,
    TrainingsPage,
    TestimonialPage,
    ContactUsPage,
    AboutUsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

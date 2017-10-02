import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { MyTeamsComponent,TournamentsComponent,TeamsComponent,TeamDetailComponent,TeamHomeComponent,StandingComponent } from '../pages/pages';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {EliteApi} from './shared/shared';

@NgModule({
  declarations: [
    MyApp,
    MyTeamsComponent,
    TournamentsComponent,
    TeamsComponent,
    TeamDetailComponent,
    TeamHomeComponent,
    StandingComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsComponent,
    TournamentsComponent,
    TeamsComponent,
    TeamDetailComponent,
    TeamHomeComponent,
    StandingComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EliteApi,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

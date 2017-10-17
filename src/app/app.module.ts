import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import {GamesComponent, MyTeamsComponent,TournamentsComponent,TeamsComponent,TeamDetailComponent,TeamHomeComponent,StandingComponent } from '../pages/pages';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {EliteApi, UserSettings} from './shared/shared';
import {IonicStorageModule} from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    MyTeamsComponent,
    TournamentsComponent,
    TeamsComponent,
    TeamDetailComponent,
    TeamHomeComponent,
    StandingComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsComponent,
    TournamentsComponent,
    TeamsComponent,
    TeamDetailComponent,
    TeamHomeComponent,
    StandingComponent,
    GamesComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EliteApi,
    UserSettings,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

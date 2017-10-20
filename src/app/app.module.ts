import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { MapComponent, GamesComponent, MyTeamsComponent, TournamentsComponent, TeamsComponent, TeamDetailComponent, TeamHomeComponent, StandingComponent } from '../pages/pages';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EliteApi, UserSettings } from './shared/shared';
import { IonicStorageModule } from '@ionic/storage';
import { AgmCoreModule} from 'angular2-google-maps/core';


@NgModule({
  declarations: [
    MyApp,
    MyTeamsComponent,
    TournamentsComponent,
    TeamsComponent,
    TeamDetailComponent,
    TeamHomeComponent,
    StandingComponent,
    GamesComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyBbsOlMryAHu2ESwHHSwrDBIUU7fiENNoM' })
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
    GamesComponent,
    MapComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EliteApi,
    UserSettings,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }

import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyTeamsComponent, TournamentsComponent } from '../pages/pages';
import { UserSettings } from './shared/shared';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MyTeamsComponent;
  followedTeams: any = [];

  //pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    private events: Events, private userSettings: UserSettings) {
    this.initializeApp();

    // used for an example of ngFor and navigation


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.events.subscribe('followed:changed', () => this.handleEvents());
    });
  }

  goToTournaments() {
    this.nav.push(TournamentsComponent);
  }

  goHome() {
    this.nav.push(MyTeamsComponent);
  }

  handleEvents() {
    console.log('received event');
    this.userSettings.getAllFollowed().subscribe(
      data => {
        // console.log(data[0].team.name);

        this.followedTeams = data;
        //   console.log(this.followedTeams[0].team.name);

        //console.log(JSON.parse(data));
      }

    );

  }
}

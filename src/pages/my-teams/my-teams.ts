import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TournamentsComponent, TeamHomeComponent } from '../pages';
import { EliteApi, UserSettings } from '../../app/shared/shared';


@Component({
    templateUrl: 'my-teams.html',
})
export class MyTeamsComponent {

    favorites = [];

    /* favorites = [{
         team : {id : 6182, name: 'HC Elite 7th', coach : 'Michelotti'},
         tournamentId : '1111',
         tournamentName : 'March Madness Tournament'
     },
     {
         team : {id : 805, name: 'HC Elite', coach : 'Michelotti'},
         tournamentId : '46ebd526-8839-476a-9ba0-8a9b2c07f3c3',
         tournamentName : 'Holiday Madness Tournament'
     }
     ];*/
    constructor(private nav: NavController, private eliteApi: EliteApi,
        private userSettings: UserSettings) {

    }
    goToTournament() {
        this.nav.push(TournamentsComponent);
    }
    teamTapped(item) {
        console.log("team tapped " + item.team.name);
        this.eliteApi.getTournamentData(item.team.tournamentId)
            .subscribe(t => this.nav.push(TeamHomeComponent, item.team));
        ;
    }

    ionViewDidEnter() {
        console.log("in view did enter");

         this.favorites = this.userSettings.getAllFollowed();
         setTimeout(function() {
           
        }, 2000);
        console.log("all followed " + this.favorites);

    }
}
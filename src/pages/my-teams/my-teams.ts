import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TournamentsComponent} from '../pages';

@Component({
    templateUrl : 'my-teams.html'
})
export class MyTeamsComponent{

    favorites = [{
        team : {id : 6182, name: 'HC Elite 7th', coach : 'Michelotti'},
        tournamentId : '1111',
        tournamentName : 'March Madness Tournament'
    },
    {
        team : {id : 6183, name: 'HC Elite', coach : 'Michelotti'},
        tournamentId : '1112',
        tournamentName : 'Holiday Madness Tournament'
    }
    ];
    constructor(private nav : NavController){

    }
    goToTournament(){
        this.nav.push(TournamentsComponent);
    }
}
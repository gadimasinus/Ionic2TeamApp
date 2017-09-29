import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TournamentsComponent} from '../pages';

@Component({
    templateUrl : 'my-teams.html'
})
export class MyTeamsComponent{
    constructor(private nav : NavController){

    }
    goToTournament(){
        this.nav.push(TournamentsComponent);
    }
}
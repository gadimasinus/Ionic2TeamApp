import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TeamsComponent} from '../pages';


@Component({
  templateUrl : 'tournaments.html'
}
)
export class TournamentsComponent{

    constructor(private nav : NavController){

    }

    itemTapped(){
      this.nav.push(TeamsComponent);
    }
}
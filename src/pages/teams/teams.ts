import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TeamDetailComponent} from '../pages';


@Component({
  templateUrl : 'teams.html'
}
)
export class TeamsComponent{

    constructor(private navCtrl : NavController){

    }
  itemTapped(){
      this.navCtrl.push(TeamDetailComponent);
  }
}
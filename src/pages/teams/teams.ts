import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TeamHomeComponent} from '../pages';
import {EliteApi} from '../../app/shared/shared';


@Component({
  templateUrl : 'teams.html'
}
)
export class TeamsComponent{

    teams = [];
    constructor(private navCtrl : NavController, private navParams : NavParams, private eliteApi : EliteApi){

    }

    ionViewDidLoad(){
        let selectedTournament  = this.navParams.data;
        console.log('selected tour is ' + selectedTournament );
        this.eliteApi.getTournamentData(selectedTournament.id).subscribe(data=>{
        this.teams = data.teams});
    }
    
    itemTapped($event,team){
      console.log("team clicked " + team.name);
      this.navCtrl.push(TeamHomeComponent,team);
  }
}
import {Component} from '@angular/core';
import {NavController, NavParams,LoadingController} from 'ionic-angular';
import {TeamHomeComponent} from '../pages';
import {EliteApi} from '../../app/shared/shared';
import * as _ from 'lodash';


@Component({
  templateUrl : 'teams.html'
}
)
export class TeamsComponent{

    teams = [];
    allteams : any;
    divisionteams : any

    constructor(private navCtrl : NavController, private navParams : NavParams, private eliteApi : EliteApi
    ,private loadingController :LoadingController){

    }

    ionViewDidLoad(){
      console.log("in teams view did load");
      
        let selectedTournament  = this.navParams.data;
        var loader = this.loadingController.create({
          content : "Getting data"
        });

        loader.present().then(()=>{
            this.eliteApi.getTournamentData(selectedTournament.id).subscribe(data=>{
            this.allteams = data.teams
            this.divisionteams = _.chain(data.teams)
                                  .groupBy('division')
                                  .toPairs()
                                  .map(item=>_.zipObject(['divisionName','divisionTeams'],item))
                                  .value();
            this.teams = this.divisionteams;
            console.log(this.divisionteams);
            loader.dismiss();


          });
        });
        
    }
    
    itemTapped($event,team){
      console.log("team clicked " + team.name);
      var loader = this.loadingController.create({content : "Loading team home page"});
      loader.present().then(()=>{
          this.navCtrl.push(TeamHomeComponent,team);
          loader.dismiss();
      });
      
  }
}
import {Component} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';
import {TeamHomeComponent} from '../pages';
import {EliteApi} from "../../app/shared/shared";

@Component({
    templateUrl : 'games.html'
})
export class GamesComponent{

    game : any;
    constructor(private nav : NavController, private params : NavParams, private eliteApi: EliteApi){
        this.game = this.params.data;
        console.log('in games constructor  '+ this.game);
        
    }

   teamClicked(id){
       let team = this.eliteApi.getCurrentTournament().teams.find(t=>t.id === id);
       this.nav.push(TeamHomeComponent,team);
   }
  
  
}
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamHomeComponent ,MapComponent} from '../pages';
import { EliteApi } from "../../app/shared/shared";
declare var window : any;
@Component({
    templateUrl: 'games.html'
})
export class GamesComponent {

    game: any;

    constructor(private nav: NavController, private params: NavParams, private eliteApi: EliteApi) {

        console.log('in games constructor  ');
        this.game = this.params.data;
        this.game.gameTime = Date.parse(this.game.time);
    }

    ionViewLoaded() {
        
    }

    teamTapped(id) {
        let team = this.eliteApi.getCurrentTournament().teams.find(t => t.id === id);
        this.nav.push(TeamHomeComponent, team);
    }

    goToDirections() {
            let tourData = this.eliteApi.getCurrentTournament();
            let location = tourData.locations[this.game.id];
            window.location = `geo:${location.latitude},${location.longitude};u=35;`;
    }

    goToMap() {
      this.nav.push(MapComponent, this.game);
    }

    isWinner(source1, source2) {

    }
}
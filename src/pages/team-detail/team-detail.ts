import {Component} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';
import * as _ from 'lodash';
import {EliteApi} from '../../app/shared/shared';
import {GamesComponent} from '../pages';

@Component({
    templateUrl : 'team-detail.html'
})
export class TeamDetailComponent{
    team : any ={};
    games : any[];
    private tourData : any;
    teamStanding : any;
    constructor(private navCtrl : NavController,private params : NavParams, private eliateApi : EliteApi){
    //    console.log('in team details page');
        
     //   console.log("params data " + params.data);
        
        
    }

    ionViewDidLoad(){
        
        
        this.team = this.params.data;
        console.log('in team detail' + this.team.name);
        this.tourData = this.eliateApi.getCurrentTournament();
        this.games = _.chain(this.tourData.games)
                  .filter(g => g.team1Id === this.team.id || g.team2Id === this.team.id)
                  .map(g => {
                      let isTeam1 = (g.team1Id === this.team.id);
                      let opponentName = isTeam1 ? g.team2 : g.team1;
                      let scoreDisplay = this.getScoreDisplay(isTeam1, g.team1Score, g.team2Score);
                      return {
                          gameId: g.id,
                          opponent: opponentName,
                          time: Date.parse(g.time),
                          location: g.location,
                          locationUrl: g.locationUrl,
                          scoreDisplay: scoreDisplay,
                          homeAway: (isTeam1 ? "vs." : "at")
                      };
                  })
                  .value();
        this.teamStanding = _.find(this.tourData.standings,{ "teamId" : this.team.id});

    }

     getScoreDisplay(isTeam1, team1Score, team2Score) {
        if (team1Score && team2Score) {
            var teamScore = (isTeam1 ? team1Score : team2Score);
            var opponentScore = (isTeam1 ? team2Score : team1Score);
            var winIndicator = teamScore > opponentScore ? "W: " : "L: ";
            return winIndicator + teamScore + "-" + opponentScore;
        }
        else {
            return "";
        }
    }

      gamesClicked($event, game){
          console.log('in games clicked');
          
        let sourceGame = this.tourData.games.find(g => g.id === game.gameId);
        console.log('source game is ' + sourceGame.opponentName);
        
        this.navCtrl.parent.parent.push(GamesComponent, sourceGame);
        
    }


}
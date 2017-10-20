import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import * as _ from 'lodash';
import { EliteApi, UserSettings } from '../../app/shared/shared';
import { GamesComponent } from '../pages';
import * as moment from 'moment';

@Component({
    templateUrl: 'team-detail.html'
})
export class TeamDetailComponent {
    team: any; // ={};
    dateFilter: string;
    games: any[];
    allgames: any[];
    private tourData: any;
    teamStanding: any;
    useDateFilter: boolean;
    isFollowing: boolean;
    constructor(private navCtrl: NavController, private params: NavParams,
        private eliateApi: EliteApi, private alertController: AlertController,
        private toastController: ToastController, private userSettings: UserSettings) {
    }
    ////TS_IGNORE
    ionViewDidLoad() {
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
        this.allgames = this.games;
        this.teamStanding = _.find(this.tourData.standings, { "teamId": this.team.id });
        this.userSettings.isFollowing(this.team).then(value => this.isFollowing = value);

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

    gamesClicked($event, game) {
        console.log('in games clicked');

        let sourceGame = this.tourData.games.find(g => g.id === game.gameId);
        console.log('source game is ' + sourceGame.opponentName);

        this.navCtrl.parent.parent.push(GamesComponent, sourceGame);

    }

    dateFlipped() {
        if (this.useDateFilter) {
            this.games = _.filter(this.allgames, g => moment(g.time).isSame(this.dateFilter, 'day'));
        }
        else {
            this.games = this.allgames;
        }

    }

    getScoreWorL(game) {
        return game.scoreDisplay ? game.scoreDisplay[0] : '';
    }

    getBadgeClassByGame(game) {
        return game.scoreDisplay.indexOf('W:') === 0 ? 'primary' : 'danger';
    }

    toggleFollow() {
        if (this.isFollowing) {
            let confirm = this.alertController.create({
                title: 'unfollow?',
                message: 'Are you sure you want to unfollow?',
                buttons: [{
                    text: 'Yes',
                    handler: () => {
                        this.isFollowing = false;

                        this.userSettings.unfollowTeam(this.team);

                        let toast = this.toastController.create({
                            message: 'You have unfollowed this team.',
                            duration: 2000,
                            position: 'bottom'
                        });

                        toast.present();

                    }
                },
                {
                    text: 'No',
                }]
            });

            confirm.present();

        }
        else {
            this.isFollowing = true;
            this.userSettings.followTeam(this.team, this.tourData.tournament.id,
                this.tourData.tournament.name);
        }
    }

    refreshAll(refresher){
        this.eliateApi.refreshTournament().subscribe(()=>{
            console.log('getting refresh data');
            
            refresher.complete()
            this.ionViewDidLoad();
        }
        );
    }
}
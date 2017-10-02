import {Component} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';
import {TeamDetailComponent,StandingComponent} from '../pages';

@Component({
    templateUrl : 'teamhome.html'
})
export class TeamHomeComponent{
   team : any;
    teamDetailTab : TeamDetailComponent;
    standingTab : StandingComponent;
    constructor(private navCtrl : NavController, private params : NavParams ) {
        console.log(params.data);
        
        this.team = params.data;
    }

    goHome(){
        this.navCtrl.popToRoot();
    }
}
import {Component} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';
import {TeamDetailComponent,StandingComponent} from '../pages';

@Component({
    templateUrl : 'teamhome.html'
})
export class TeamHomeComponent{
   team : any;
    teamDetailTab = TeamDetailComponent;
    standingTab = StandingComponent;
    constructor(private navCtrl : NavController, private params : NavParams ) {
     //   console.log(params.data);
      //  console.log('in team home');
        
        
        
        this.team = params.data;
    }

    ionViewDidLoad(){
       // console.log('detail tab  ' + this.teamDetailTab);
    }
    goHome(){
        this.navCtrl.popToRoot();
    }
}
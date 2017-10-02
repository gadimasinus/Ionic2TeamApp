import {Component} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';

@Component({
    templateUrl : 'team-detail.html'
})
export class TeamDetailComponent{
    team : any;
    constructor(private navCtrl : NavController,private params : NavParams){
        console.log("params data " + params.data);
        
        this.team = params.data;
    }


}
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TeamHomeComponent} from '../pages';


@Component({
  templateUrl : 'teams.html'
}
)
export class TeamsComponent{

     teams =[
        {
            Id:1,
            Name : "Thunder"
        },
          {
            Id:2,
            Name : "Waves"
        },
          {
            Id:3,
            Name : "Lighting"
        }

    ]
    constructor(private navCtrl : NavController){

    }
  itemTapped($event,team){
      console.log("team clicked " + team.Name);
      
      this.navCtrl.push(TeamHomeComponent,team);
  }
}
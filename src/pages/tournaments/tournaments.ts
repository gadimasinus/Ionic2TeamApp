import {Component } from '@angular/core';
import {NavController, LoadingController} from 'ionic-angular';
import {TeamsComponent} from '../pages';
import {EliteApi} from '../../app/shared/shared';


@Component({
  templateUrl : 'tournaments.html'
}
)
export class TournamentsComponent{

    tournaments : any;
    constructor(private nav : NavController, private eliteApi : EliteApi,
    private loadingController : LoadingController){

    }

    itemTapped($event,tournament){
      this.nav.push(TeamsComponent,tournament);
    }

    ionViewDidLoad(){
       var loader = this.loadingController.create({
         content : "Getting tournaments"
       });

       loader.present().then(()=>{
        this.eliteApi.getTournaments().then(data=>{this.tournaments=data;
        loader.dismiss();
        });
       })
        
    }
}
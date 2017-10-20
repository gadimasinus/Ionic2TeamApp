import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { EliteApi } from "../../app/shared/shared";
//import { AgmCoreModule} from 'angular2-google-maps/core';

declare var window : any;
@Component({
    templateUrl: 'map.html',
})
export class MapComponent {

    map: any = {}
    constructor(private navParams: NavParams, private eliteApi: EliteApi) {

    }

    ionViewDidLoad() {
        let games = this.navParams.data;
        let tourData = this.eliteApi.getCurrentTournament();
        let location = tourData.locations[games.locationId];

        this.map = {
            lat: location.latitude,
            lng: location.longitude,
            zoom: 12,
            markerLabel: games.location
        };
    }
    
    getDirections() {
         window.location = `geo:${this.map.lat},${this.map.lng};u=35;`;
    }
}

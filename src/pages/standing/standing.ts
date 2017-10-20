import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as _ from 'lodash';
import { EliteApi } from '../../app/shared/shared';

@Component({
    templateUrl: 'standing.html'
})
export class StandingComponent {

    allStandings: any[];
    standings: any[];
    team: any;
    divisionFilter: string = "division";

    constructor(private nvaControl: NavController, private navparams: NavParams,
        private eliteApi: EliteApi) {

    }

    ionViewDidLoad() {
        this.team = this.navparams.data;
        //  console.log('team in standing');
        //  console.log(this.team);
        this.allStandings = this.eliteApi.getCurrentTournament().standings;
        console.log(this.allStandings);
        /*  this.standings = _.chain(this.allStandings)
                               .groupBy("division")
                               .toPairs()
                               .map(item => _.zipObject(['divisionName','divisionStandings'],item))
                               .value(); */

        // console.log(this.standings);
        this.standings = this.eliteApi.getCurrentTournament().standings;

        this.filterDivision();

    }

    getHeader(record, recordIndex, records) {
        if (recordIndex === 0 || record.division !== records[recordIndex - 1].division) {
            return record.division;
        }
        return null
    }

    filterDivision() {
        console.log('in filter divisiopn method');

        if (this.divisionFilter === "all") {
            this.allStandings = this.standings;
        }
        else {
            this.allStandings = _.filter(this.standings, t => t.division === this.team.division);
        }
    }
}
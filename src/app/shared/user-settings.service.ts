import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as _ from 'lodash';
import { Events } from 'ionic-angular';
import 'rxjs/add/observable/fromPromise';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserSettings {

    constructor(private storage: Storage, private events: Events) {

    }

    followTeam(team, tournamentId, tournamentName) {
        console.log('following team start' + team.id);
        let item = {
            team: team,
            tournamentId: tournamentId,
            tournamentName: tournamentName
        };
        console.log('following team ' + team.id);
        this.storage.set(team.id.toString(), JSON.stringify(item));
        this.events.publish("followed:changed");
        //console.log(this.storage);

    }

    unfollowTeam(team) {
        console.log('unfollowing team ' + team.id);

        this.storage.remove(team.id.toString());
        this.events.publish("followed:changed");
    }

    isFollowing(team) {
        return this.storage.get(team.id.toString()).then(value => value ? true : false);
    }

    /*getAllFollowed(): Observable<any[]> {

        let items = [];
        return Observable.fromPromise(
            this.storage.forEach(data => {
                items.push(JSON.parse(data));
                console.log('data is ' + data);
                return items;
            }
            )
        );
        // console.log('length is ' + items.length);

        // return items.length ? items : null;
    }*/

    getAllFollowed(): Observable<any[]> {
        var promise = new Promise(resolve => {
            let results = [];
            this.storage.forEach(data => {
             // console.log('***inside foreach', data);
                results.push(JSON.parse(data));
            });
            return resolve(results);
        });

        return  Observable.fromPromise(promise);
        // console.log('length is ' + items.length);

        // return items.length ? items : null;
    }

}
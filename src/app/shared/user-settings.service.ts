import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as _ from 'lodash';

@Injectable()
export class UserSettings {

   // storage = new Storage(LocalStorage);
    constructor(private storage : Storage) {

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
        console.log(this.storage);

    }

    unfollowTeam(team) {
        console.log('unfollowing team ' + team.id);

        this.storage.remove(team.id.toString());
    }

    isFollowing(team) {
        return this.storage.get(team.id.toString()).then(value => value ? true : false);
    }

    getAllFollowed() {
        let items = [];
        console.log("in getAllFollowed");
        console.log(this.storage);

        this.storage.forEach(data=>{
            console.log(JSON.parse(data));
            
            items.push(JSON.parse(data));
        })

       
        console.log('length is ' + items.length);
        
        return items.length ? items : null;
    }
}
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EliteApi {
    private baseUrl = 'https://elite-schedule-app-i2-a2881.firebaseio.com/';
    currentTournament: any = {};
    tournamentDict = {};
    constructor(private http : Http){

    }

    getTournaments(){
        return new Promise(resolve=>{
            this.http.get(`${this.baseUrl}/tournaments.json`)
            .subscribe(res=>resolve(res.json()));
        });
    }

    getTournamentData(id, forceRefresh : boolean = false) : Observable<any> {
        
        if(!forceRefresh && this.tournamentDict[id])
        { 
            console.log('not a force refresh');
            
            this.currentTournament = this.tournamentDict[id];
            console.log('no need to make http call.... ');
            return Observable.of(this.currentTournament);
        }
        //no data yet
        return this.http.get(`${this.baseUrl}/tournaments-data/${id}.json`)
        .map((response : Response) =>{
            this.tournamentDict[id] = response.json();
            this.currentTournament =this.tournamentDict[id]; 
            console.log('making http call ..........');
            
            return this.currentTournament;
        });

        

    }
    
    getCurrentTournament(){
        return this.currentTournament;
    }

    refreshTournament()  {
        return this.getTournamentData(this.currentTournament.tournament.id, true);
    }
}
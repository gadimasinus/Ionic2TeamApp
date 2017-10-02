import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class EliteApi {
    private baseUrl = 'https://elite-schedule-app-i2-a2881.firebaseio.com/';
    constructor(private http : Http){

    }
}
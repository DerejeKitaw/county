import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { ICounty } from "./county";



@Injectable()
export class CountyService {
    private _countyUrl = 'api/countys/countys.json';

    constructor(private _http: Http) { }

    getCountys(): Observable<ICounty[]> {
        return this._http.get(this._countyUrl)
            .map((response: Response) => <ICounty[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getCounty(id: number): Observable<ICounty> {
        return this.getCountys()
            .map((countys: ICounty[]) => countys.find(p => p.countyId === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}

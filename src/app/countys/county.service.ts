import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { ICounty } from "./county";




@Injectable()
export class CountyService {
    private _countyUrl = './api/countys/countys.json';

    constructor(private _http: HttpClient) { }

    getCountys(): Observable<ICounty[]> {
      return this._http.get<ICounty[]>(this._countyUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getCounty(id: number): Observable<ICounty> {
        return this.getCountys()
            .map((countys: ICounty[]) => countys.find(p => p.countyId === id));
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Observable.throw(errorMessage);}
}

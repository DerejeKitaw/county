import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
// import {HttpClientModule} from '@angular/common/__http';
import { ICounty } from "./county";




@Injectable()
export class CountyService {
    private _countyUrl = './api/countys/countys.json';

    constructor(private _http: HttpClient) { }

    getCountys(): Observable<ICounty[]> {
        
      return this._http.get<ICounty[]>(this._countyUrl)
            //.do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getCounty(id: number) {
        return this.getCountys()
            .map((countys: ICounty[]) => countys.find(p => p.id === id));
    }
    deleteCounty(id: number) {
        // TODO
    }

    private handleError(err: HttpErrorResponse): ErrorObservable {
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

        saveCounty(county: ICounty) {
        // TODO
    }

    private createCounty(county: ICounty, options: RequestOptions): Observable<ICounty> {
        county.id = undefined;
        return this._http.post(this._countyUrl, county)
            .map(this.extractData)
            .do(data => console.log('createCounty: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private updateCounty(county: ICounty, options: RequestOptions): Observable<ICounty> {
        const url = `${this._countyUrl}/${county.id}`;
        return this._http.put(url, county)
            .map(() => county)
            .do(data => console.log('updateCounty: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private extractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }


    initializeCounty(): ICounty {
        // Return an initialized object
        return {
            id: 0,
            WindSpeed: null, 
            groundSnowLoad: null,
            FireLaneRequirement: null,
            RoofMountIncludesWellAndSeptic: null,
            RoofMountIncludesSitePlan: null,
            FootingPlanRequired: null,
            RapidShutdown: null,
            Stampeddrawing: null,
            Certletter: null,
            NEC: null,
            IBC: null,
            IRC: null,
            countyName: null,
            age: null,
            isActive: null,
        };
    }
}

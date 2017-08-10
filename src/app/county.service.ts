import { Injectable } from '@angular/core';

import { Response, Http ,Headers, RequestOptions } from "@angular/http";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { ICounty } from './countys/county';

@Injectable()
export class CountyService {
 private baseUrl = 'api/countys';

    constructor(private http: Http) { }

    getCountys(): Observable<ICounty[]> {
        return this.http.get(this.baseUrl)
            .map(this.extractData)
            .do(data => console.log('getCountys: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getCounty(id: number): Observable<ICounty> {
        if (id === 0) {
            return Observable.of(this.initializeCounty());
        };
        const url = `${this.baseUrl}/${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .do(data => console.log('getCounty: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    deleteCounty(id: number): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        const url = `${this.baseUrl}/${id}`;
        return this.http.delete(url, options)
            .do(data => console.log('deleteCounty: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    saveCounty(county: ICounty): Observable<ICounty> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (county.id === 0) {
            return this.createCounty(county, options);
        }
        return this.updateCounty(county, options);
    }

    private createCounty(county: ICounty, options: RequestOptions): Observable<ICounty> {
        county.id = undefined;
        return this.http.post(this.baseUrl, county, options)
            .map(this.extractData)
            .do(data => console.log('createCounty: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private updateCounty(county: ICounty, options: RequestOptions): Observable<ICounty> {
        const url = `${this.baseUrl}/${county.id}`;
        return this.http.put(url, county, options)
            .map(() => county)
            .do(data => console.log('updateCounty: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private extractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }

    private handleError(error: Response): Observable<any> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    initializeCounty(): ICounty {
        // Return an initialized object
        return {
            id: 0,
            countyName: null,
            countyCode: null,
            category: null,
            tags: [],
            releaseDate: null,
            price: null,
            description: null,
            starRating: null,
            imageUrl: null
        };
    }

}

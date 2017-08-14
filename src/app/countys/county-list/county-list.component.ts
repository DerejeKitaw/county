import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ICounty } from '../county';
import { CountyService } from '../county.service';
import { CountyParameterService } from '../county-parameter.service';

@Component({
  selector: 'app-county-list',
  templateUrl: './county-list.component.html',
  styleUrls: ['./county-list.component.sass']
})
export class CountyListComponent implements OnInit {
    pageTitle: string = 'County List';
    filteredCountys: ICounty[];
    countys: ICounty[];
    errorMessage: string;
    get listFilter(): string {
        return this.countyParameterService.filterBy;
    }
    set listFilter(value: string) {
        // set filter value. Initial value is ""
        this.countyParameterService.filterBy = value;
        console.log("Filtered by :" +value);
        console.log("this.listFilter  :" +this.listFilter);
        if(this.listFilter==="" && this.listFilter===undefined){
          this.filteredCountys=this.countys;
        }
        this.filteredCountys = this.listFilter ? this.performFilter(this.listFilter) : this.countys;
        console.log("this.filteredCountys :" +this.filteredCountys)
    }
    constructor(
      private countyService: CountyService,
      private countyParameterService:CountyParameterService,
      private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.listFilter = this.route.snapshot.queryParams['id'] || '';
        // console.log("Befor countyService : " +this.countys);
        this.countyService.getCountys()
                .subscribe(countys => {
                  this.countys = countys;
                  this.filteredCountys =countys;
                  console.log("promis come back : " +this.countys);
                },
                 error => this.errorMessage = <any>error);
                    }
        performFilter(filterBy: string): ICounty[] {
          console.log("performFilter by----------------"+filterBy);
        filterBy = filterBy.toLocaleLowerCase();
        return this.countys.filter((county: ICounty) =>
              county.countyName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
}

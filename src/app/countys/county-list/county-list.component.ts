import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ICounty } from '../county';
import { CountyService } from '../county.service';

@Component({
  selector: 'app-county-list',
  templateUrl: './county-list.component.html',
  styleUrls: ['./county-list.component.sass']
})
export class CountyListComponent implements OnInit {
 pageTitle: string = 'County List';
   
    errorMessage: string;

    countys: ICounty[];

    constructor(private countyService: CountyService,
                private route: ActivatedRoute) { }

    

    ngOnInit(): void {
        
        this.countyService.getCountys()
                .subscribe(countys => this.countys = countys,
                           error => this.errorMessage = <any>error);
    }

}

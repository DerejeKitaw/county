import { Component, OnInit } from '@angular/core';
// import { ICounty } from '../county/county';
// import { CountyService } from '../county.service';
import { ActivatedRoute } from '@angular/router';
import { ICounty } from '../county';
import { CountyService } from '../../county.service';

@Component({
  selector: 'app-county-list',
  templateUrl: './county-list.component.html',
  styleUrls: ['./county-list.component.sass']
})
export class CountyListComponent implements OnInit {
 pageTitle: string = 'County List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;

    countys: ICounty[];

    constructor(private countyService: CountyService,
                private route: ActivatedRoute) { }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.listFilter = this.route.snapshot.queryParams['filterBy'] || '';
        this.showImage = (this.route.snapshot.queryParams['showImage'] === 'true');
        // console.log(this.route.snapshot.queryParamMap.get('filterBy'));            

        this.countyService.getCountys()
                .subscribe(countys => this.countys = countys,
                           error => this.errorMessage = <any>error);
    }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute , Params} from '@angular/router';
import { ICounty } from '../county';
import { CountyService } from './../county.service';



@Component({
  selector: 'app-county-detail',
  templateUrl: './county-detail.component.html',
  styleUrls: ['./county-detail.component.sass']
})
export class CountyDetailComponent implements OnInit {
 pageTitle: string = 'County Detail';
    county: ICounty;
    errorMessage: string;
    CountyId: string;
    constructor(private countyService: CountyService,
                private router: Router,
                private route: ActivatedRoute) {
                this.route.params.subscribe(params => {
                    this.CountyId = params.id;
                    console.log('CountyId :'+this.CountyId);
                });}
    

    ngOnInit(): void {
        const id = +this.CountyId;
        console.log("id :" + id);
        this.getCounty(id);
    }

    getCounty(id: number): void {
        this.countyService.getCounty(id)
            .subscribe(
                (county: ICounty) => this.county = county,
                (error: any) => this.errorMessage = <any>error);
    }

    onBack(): void {
        this.router.navigate(['/countys']);
    }
}

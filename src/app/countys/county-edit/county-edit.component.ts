import { Component, OnInit } from '@angular/core';
import { ICounty } from '../county';
import { ActivatedRoute, Router } from '@angular/router';
import { CountyService } from '../county.service';

@Component({
  selector: 'app-county-edit',
  templateUrl: './county-edit.component.html',
  styleUrls: ['./county-edit.component.sass']
})
export class CountyEditComponent implements OnInit {
pageTitle: string = 'County Edit';
    errorMessage: string;
  CountyId: string;
    private currentCounty: ICounty;
    private originalCounty: ICounty;
    private dataIsValid: { [key: string]: boolean } = {};

    get isDirty(): boolean {
        return JSON.stringify(this.originalCounty) !== JSON.stringify(this.currentCounty);
    }

    get county(): ICounty {
        return this.currentCounty;
    }
    set county(value: ICounty) {
        this.currentCounty = value;
        // Clone the object to retain a copy
        this.originalCounty = Object.assign({}, value);
    }

    constructor(private route: ActivatedRoute,
        private router: Router,
        private countyService: CountyService,
        ) { 
this.route.params.subscribe(params => {
                    this.CountyId = params.id;
                    console.log('CountyId :'+this.CountyId);
                });

        }

    ngOnInit(): void {
        // Watch for changes to the resolve data
        // this.route.data.subscribe(data => {
        //      this.onCountyRetrieved(data['county']);
        // });
    }

    // onCountyRetrieved(county: ICounty): void {
    //     this.county = county;

    //     // Adjust the title
    //     if (this.county.id === 0) {
    //         this.pageTitle = 'Add County';
    //     } else {
    //         this.pageTitle = `Edit County: ${this.county.countyName}`;
    //     }
    // }

    deleteCounty(): void {

    }

    isValid(path: string): boolean {
        this.validate();
        if (path) {
            return this.dataIsValid[path];
        }
        return (this.dataIsValid &&
            Object.keys(this.dataIsValid).every(d => this.dataIsValid[d] === true));
    }

    saveCounty(): void {
        // TODO
    }

    onSaveComplete(message?: string): void {
        // if (message) {
        //     this.messageService.addMessage(message);
        // }
        this.reset();
        // Navigate back to the county list
        this.router.navigate(['/countys']);
    }

    // Reset the data
    // Required after a save so the data is no longer seen as dirty.
    reset(): void {
        this.dataIsValid = null;
        this.currentCounty = null;
        this.originalCounty = null;
    }

    validate(): void {
        // Clear the validation object
        this.dataIsValid = {};

        // 'info' tab
        // if (this.county.countyName &&
        //     this.county.countyName.length >= 3 &&
        //     this.county.countyCode) {
        //     this.dataIsValid['info'] = true;
        // } else {
        //     this.dataIsValid['info'] = false;
        // }

        // // 'tags' tab
        // if (this.county.category &&
        //     this.county.category.length >= 3) {
        //     this.dataIsValid['tags'] = true;
        // } else {
        //     this.dataIsValid['tags'] = false;
        // }
    }
}
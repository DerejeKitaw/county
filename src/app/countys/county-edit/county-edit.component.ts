import { Component, OnInit, AfterViewInit, OnDestroy, ViewChildren, ElementRef} from '@angular/core';
import { ICounty } from '../county';
import { ActivatedRoute, Router } from '@angular/router';
import { CountyService } from '../county.service';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-county-edit',
  templateUrl: './county-edit.component.html',
  styleUrls: ['./county-edit.component.sass']
})
export class CountyEditComponent implements OnInit, OnDestroy {
    @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
    pageTitle: string = 'County Edit';
    errorMessage: string;
    CountyId: string;
    countyForm: FormGroup;
    county: ICounty;
    private sub: Subscription;
    private currentCounty: ICounty;
    private originalCounty: ICounty;
    private dataIsValid: { [key: string]: boolean } = {};
    // Use with the generic validation message class
    displayMessage: { [key: string]: string } = {};
    private validationMessages: { [key: string]: { [key: string]: string } };


    get isDirty(): boolean {
        return JSON.stringify(this.originalCounty) !== JSON.stringify(this.currentCounty);
    }
    constructor(private fb: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private countyService: CountyService,
                ) { 
                    this.route.params.subscribe(params => {
                        this.CountyId = params.id;
                        console.log('CountyId :'+this.CountyId);
                        // Defines all of the validation messages for the form.
                        // These could instead be retrieved from a file or database.
                        this.validationMessages = {
                                countyName: {
                                    required: 'County name is required.',
                                    minlength: 'County name must be at least three characters.',
                                    maxlength: 'County name cannot exceed 50 characters.'
                                }
                        };


                    });

        }

    ngOnInit(): void {
        this.countyForm = this.fb.group({
            countyName: ['', [Validators.required,
                               Validators.minLength(3),
                               Validators.maxLength(50)]],
            countyCode: ['', Validators.required],
            tags: this.fb.array([]),
            description: ''
        });

        // Read the county Id from the route parameter
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getCounty(id);
            }
        );
    }

    getCounty(id: number): void {
        this.countyService.getCounty(id)
            .subscribe(
                (county: ICounty) => this.onCountyRetrieved(county),
                (error: any) => this.errorMessage = <any>error
            );
    }
    onCountyRetrieved(county: ICounty): void {
        if (this.countyForm) {
            this.countyForm.reset();
        }
        this.county = county;

        if (this.county.id === 0) {
            this.pageTitle = 'Add County';
        } else {
            this.pageTitle = `Edit County: ${this.county.countyName}`;
        }

        // Update the data on the form
        this.countyForm.patchValue({
            countyName: this.county.countyName,
            
        });
        
    }
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
    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
    validate(): void {
        // Clear the validation object
        this.dataIsValid = {};

        
    }
}
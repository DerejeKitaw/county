import { Component, OnInit, AfterViewInit, OnDestroy, ViewChildren, ElementRef} from '@angular/core';
import { ICounty } from '../county';
import { ActivatedRoute, Router } from '@angular/router';
import { CountyService } from '../county.service';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName, AbstractControl } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-county-edit',
  templateUrl: './county-edit.component.html',
  styleUrls: ['./county-edit.component.sass']
})
export class CountyEditComponent implements OnInit, OnDestroy {
    pageTitle: string = 'County Edit';
    countyForm: FormGroup;
    formError: { [id: string]: string };
    errorMessage: string;
    //CountyId: string;
    county: ICounty = new ICounty();
    private sub: Subscription;
    private currentCounty;
    private originalCounty;
    private dataIsValid: { [key: string]: boolean } = {};
    // Use with the generic validation message class
    displayMessage: { [key: string]: string } = {};
    private validationMessages: { [key: string]: { [key: string]: string } };


    // get isDirty(): boolean {
    //     return JSON.stringify(this.originalCounty) !== JSON.stringify(this.currentCounty);
    // }
    constructor(private fb: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private countyService: CountyService,
                ) { 
                    this.createForm();
                    // this.logNameChange();
                    // Defines all of the validation messages for the form.
                    // These could instead be retrieved from a file or database.
                    this.validationMessages = {
                        countyName: {
                            required: 'County name is required.',
                            minlength: 'County name must be at least three characters.',
                            maxlength: 'County name cannot exceed 50 characters.'
                    }
                };
                
                this.countyForm.valueChanges
                .subscribe(data => this.onValueChanged(data));

                    

        }
        createForm() {
            this.countyForm = this.fb.group({
                countyName: [this.county.countyName, [Validators.required,
                                   Validators.minLength(3),
                                   Validators.maxLength(50)]]
    
            });
          }
    ngOnInit(): void {
        this.route.params.subscribe(params => {
            const id = +params['id'];
            console.log('CountyId from ngOnInit:'+id);
            this.getCounty(id);
        });

        
        
    }

    save(): void {
        console.log('Saved: ' + JSON.stringify(this.countyForm.value));
    }


    getCounty(id: number): void {
        this.countyService.getCounty(id)
            .subscribe(
                county => this.onCountyRetrieved(county),
                (error: any) => this.errorMessage = <any>error
            );
    }
    onCountyRetrieved(county): void {
        if (this.countyForm) {
            this.countyForm.reset();
            console.log('this.countyForm is true:');
        }
        this.county = county;
        console.log('this.countyForm is false:'+this.county.countyName);
        if (this.county.id === 0) {
            this.pageTitle = 'Add County';
        } else {
            this.pageTitle = `Edit County: ${this.county.countyName}`;
        }
        
        // // Update the data on the form
        // this.countyForm.patchValue({
        //     countyName: this.county.countyName,
            
        // });
        
    }
     // Start of a generic validator
     onValueChanged(data: any): void {
        for (const field in this.formError) {
            if (this.formError.hasOwnProperty(field)) {
                const hasError = this.countyForm.controls[field].dirty &&
                    !this.countyForm.controls[field].valid;
                this.formError[field] = '';
                if (hasError) {
                    for (const key in this.countyForm.controls[field].errors) {
                        if (this.countyForm.controls[field].errors.hasOwnProperty(key)) {
                            this.formError[field] += this.validationMessages[field][key] + ' ';
                        }
                    }
                }
            }
        }
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
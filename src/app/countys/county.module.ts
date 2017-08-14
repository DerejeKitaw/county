import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { CountyListComponent } from './county-list/county-list.component';
import { CountyService } from './county.service';
import { CountyParameterService } from './county-parameter.service';



@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
// BrowserModule,
    // HttpClientModule,
    RouterModule.forChild([
      { path: '', component: CountyListComponent }
    ]),
  ],
  declarations: [
    CountyListComponent
    // CountyFilterPipe
  ],
  providers: [
    CountyService,
    CountyParameterService
  ],
})
export class CountyModule { }

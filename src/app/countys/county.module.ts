import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CountyListComponent } from './county-list/county-list.component';
import { CommonModule } from '@angular/common';
import { CountyService } from './county.service';
// import { CountyFilterPipe } from './county-filter.pipe';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CountyListComponent }
    ])
  ],
  declarations: [
    CountyListComponent
    // CountyFilterPipe
  ],
  providers: [CountyService],
})
export class CountyModule { }

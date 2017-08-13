import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import {HttpClient} from '@angular/common/http';
import { CountyListComponent } from './county-list/county-list.component';
import { CommonModule } from '@angular/common';
import { CountyService } from './county.service';
// import { CountyFilterPipe } from './county-filter.pipe';
// import { BrowserModule } from '@angular/platform-browser';
// import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
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
  providers: [CountyService],
})
export class CountyModule { }

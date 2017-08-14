import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { CountyListComponent } from './county-list/county-list.component';
import { CountyService } from './county.service';
import { CountyParameterService } from './county-parameter.service';
import { CountyDetailComponent } from './county-detail/county-detail.component';
import { CountyEditComponent } from './county-edit/county-edit.component';



@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
// BrowserModule,
    // HttpClientModule,
    RouterModule.forChild([
      { path: '', component: CountyListComponent },
      { path: ':id', component: CountyDetailComponent },
      { path: ':id/edit', component: CountyEditComponent },
      // { path: '/:id/editReactive', component: CountyEditReactiveComponent }
    ]),
  ],
  declarations: [
    CountyListComponent,
    CountyDetailComponent,
    CountyEditComponent
  ],
  providers: [
    CountyService,
    CountyParameterService
  ],
})
export class CountyModule { }

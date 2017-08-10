import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CountyListComponent } from './county-list/county-list.component';
import { CountyService } from '../county.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'countys',
        component: CountyListComponent
      }
      // ,
      // {
      //   path: ':id',
      //   component: CountyDetailComponent,
      //   resolve: { product: CountyResolver }
      // },
      // {
      //   path: ':id/edit',
      //   component: CountyEditComponent,
      //   resolve: { product: CountyResolver },
      //   canDeactivate: [CountyEditGuard],
      //   children: [
      //     {
      //       path: '',
      //       redirectTo: 'info',
      //       pathMatch: 'full'
      //     },
      //     {
      //       path: 'info',
      //       component: CountyEditInfoComponent
      //     },
      //     {
      //       path: 'tags',
      //       component: CountyEditTagsComponent
      //     }
        // ]
      // }
    ])
  ],
  declarations: [
    CountyListComponent,
  ],
  providers: [CountyService],
})
export class CountyModule { }

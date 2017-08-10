import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from './user/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    children: [
            {
                path: 'countys',
                // canActivate: [ AuthGuard ],
                data: { preload: true },
                loadChildren: 'app/countys/county.module#CountyModule'
            }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

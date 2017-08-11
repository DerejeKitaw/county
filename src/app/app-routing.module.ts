import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from './user/auth-guard.service';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

      { path: 'home', component: HomeComponent },
      {
          path: 'countys',
          // canActivate: [ AuthGuard ],
          data: { preload: true },
          loadChildren: 'app/countys/county.module#CountyModule'
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'countys', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

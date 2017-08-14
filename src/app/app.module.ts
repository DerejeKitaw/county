import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CountyModule } from './countys/county.module';
// import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { CountyFilterPipe } from '../../src/app/countys/county-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountyFilterPipe
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    AppRoutingModule,
    CountyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

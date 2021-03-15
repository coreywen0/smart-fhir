import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Test1Component } from './components/test1/test1.component';
import {RouterModule, Routes} from '@angular/router';
import { Test2Component } from './components/test2/test2.component';
import { HomeComponent } from './components/home/home.component';
import { LaunchComponent } from './components/launch/launch.component';
import { AllergiesComponent } from './components/allergies/allergies.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AllergenIntoleranceComponent } from './components/allergen-intolerance/allergen-intolerance.component';
import { PatientOverviewComponent } from './components/patient-overview/patient-overview.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test1', component: Test1Component },
  { path: 'home', component: Test2Component },
  { path: 'patient-overview', component: PatientOverviewComponent },
  { path: 'launch', component: LaunchComponent },
  { path: '**', component: LaunchComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    HomeComponent,
    LaunchComponent,
    AllergiesComponent,
    AllergenIntoleranceComponent,
    PatientOverviewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

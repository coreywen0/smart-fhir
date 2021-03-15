import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LaunchComponent } from './components/launch/launch.component';
import { AllergiesComponent } from './components/allergies/allergies.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AllergenIntoleranceComponent } from './components/allergen-intolerance/allergen-intolerance.component';
import { PatientOverviewComponent } from './components/patient-overview/patient-overview.component';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'patient-overview', component: PatientOverviewComponent },
  { path: 'launch', component: LaunchComponent },
  { path: '**', component: LaunchComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LaunchComponent,
    AllergiesComponent,
    AllergenIntoleranceComponent,
    PatientOverviewComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

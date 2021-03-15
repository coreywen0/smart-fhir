import {Component, OnInit} from '@angular/core';
import {PatientService} from '../../services/patient.service';
import {PatientModel} from '../../models/patient.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-patient-overview',
  templateUrl: './patient-overview.component.html',
  styleUrls: ['./patient-overview.component.css']
})
export class PatientOverviewComponent implements OnInit {

  isLoading = true;
  patient: PatientModel;

  constructor(private patientService: PatientService,
              private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.patientService.getPatient()
      .then(resp => {
        this.patient = resp;
        this.isLoading = false;
      });
  }

  testClick(): void {
    console.log('test click');
    // this.router.navigateByUrl('http://127.0.0.1:8080/launch.html?launch=eyJhIjoiMSJ9&iss=https%3A%2F%2Flaunch.smarthealthit.org%2Fv%2Fr4%2Ffhir');
  }

}

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
  ) {
  }

  ngOnInit(): void {
    this.patientService.getPatient()
      .then(resp => {
        this.patient = resp;
        this.isLoading = false;
      });
  }

}

import {Component, OnInit} from '@angular/core';
import {PatientService} from '../../services/patient.service';
import {PatientModel} from '../../models/patient.model';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ErrorDialogComponent} from '../error-dialog/error-dialog.component';

@Component({
  selector: 'app-patient-overview',
  templateUrl: './patient-overview.component.html',
  styleUrls: ['./patient-overview.component.css']
})
export class PatientOverviewComponent implements OnInit {

  isLoading = true;
  patient: PatientModel;

  constructor(private patientService: PatientService,
              public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.patientService.getPatient()
      .then(resp => {
        this.patient = resp;
        this.isLoading = false;
      })
      .catch(reason => {
        this.dialog.open(ErrorDialogComponent, {
          data: reason
        });
      });
  }

}

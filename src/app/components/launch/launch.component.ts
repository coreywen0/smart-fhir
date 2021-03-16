import { Component, OnInit } from '@angular/core'
import * as fhir from 'fhirclient';
import {ErrorDialogComponent} from '../error-dialog/error-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {

  private REDIRECT_URI = '/patient-overview';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    // launches and goes to the provider/patient select
    fhir.oauth2.authorize({
      clientId: 'my_web_app',
      redirectUri: this.REDIRECT_URI,
      scope: 'launch openid fhirUser patient/*.read',
    })
      .catch(reason => {
        this.dialog.open(ErrorDialogComponent, {
          data: reason
        });
      });
  }

}

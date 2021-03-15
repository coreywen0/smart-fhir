import { Component, OnInit } from '@angular/core'
import * as fhir from 'fhirclient';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {

  constructor() { }

  // http://127.0.0.1:8080/launch.html?launch=eyJhIjoiMSJ9&iss=https%3A%2F%2Flaunch.smarthealthit.org%2Fv%2Fr4%2Ffhir

  ngOnInit(): void {
    fhir.oauth2.authorize({
      clientId: 'my_web_app',
      redirectUri: '/allergies',
      scope: 'launch openid fhirUser patient/*.read',
    })
      .then((resp) => {
        console.log(resp);
      });
  }

}
import { Component, OnInit } from '@angular/core';
import * as fhir from 'fhirclient';
import Client from 'fhirclient/lib/Client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-allergies',
  templateUrl: './allergies.component.html',
  styleUrls: ['./allergies.component.css']
})
export class AllergiesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getData()
      .then((resp) => {
        console.log(resp);
      });
  }

  async getData(): Promise<void> {
    const clientData: any = await fhir.oauth2.ready().catch(console.error);
    console.log(clientData);
    const patientData = await clientData.patient.read();
    console.log(patientData);
    const allergiesData = await clientData.request(
      `/AllergyIntolerance?patient=${patientData.id}`
    );
    console.log('allergies');
    console.log(allergiesData);

  }

  testClick(): void {
    console.log('clicked');
    // this.router.navigate(['http://127.0.0.1:8080/launch.html?launch=eyJhIjoiMSJ9&iss=https%3A%2F%2Flaunch.smarthealthit.org%2Fv%2Fr4%2Ffhir'])
    //   .then((resp) => {
    //     console.log(resp);
    //   });
  }

}

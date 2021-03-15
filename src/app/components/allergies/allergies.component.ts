import {Component, OnInit} from '@angular/core';
import * as fhir from 'fhirclient';
import Client from 'fhirclient/lib/Client';
import {Router} from '@angular/router';
import {AllergyService} from '../../services/allergy.service';
import {AllergenIntoleranceModel} from '../../models/allergen-intolerance.model';

@Component({
  selector: 'app-allergies',
  templateUrl: './allergies.component.html',
  styleUrls: ['./allergies.component.css']
})
export class AllergiesComponent implements OnInit {

  allergies: AllergenIntoleranceModel[];

  isLoading = true;

  constructor(private router: Router,
              private allergyService: AllergyService,
  ) {
  }

  ngOnInit(): void {
    this.allergyService.getAllergies()
      .then(resp => {
        this.allergies = resp;
        console.log('this.allergies');
        console.log(this.allergies);
        this.isLoading = false;
      });
  }

  async getData(): Promise<void> {
    const clientData: any = await fhir.oauth2.ready().catch(console.error);
    console.log(clientData);
    const patientData = await clientData.patient.read();
    console.log(patientData);
    const allergiesData = await clientData.request(
      `/AllergyIntolerance?patient=${patientData.id}`,
      {flat: true}
    );
    console.log('allergies');
    console.log(allergiesData);

  }

}

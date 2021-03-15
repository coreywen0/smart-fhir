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

  constructor(
    private allergyService: AllergyService,
  ) {
  }

  ngOnInit(): void {
    this.allergyService.getAllergies()
      .then(resp => {
        this.allergies = resp;
        this.isLoading = false;
      });
  }

}

import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import * as fhir from 'fhirclient';
import Client from 'fhirclient/lib/Client';
import {Router} from '@angular/router';
import {AllergyService} from '../../services/allergy.service';
import {AllergenIntoleranceModel} from '../../models/allergen-intolerance.model';
import {Subscription} from 'rxjs';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-allergies',
  templateUrl: './allergies.component.html',
  styleUrls: ['./allergies.component.css']
})
export class AllergiesComponent implements OnInit, OnDestroy {

  isLoading = true;

  @ViewChild('formElement') filterForm: NgForm;
  hasAllergies = false;
  allergies: AllergenIntoleranceModel[] = [];
  private allergiesSub: Subscription;

  constructor(
    private allergyService: AllergyService,
  ) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.allergyService.getAllergies()
      .catch(console.error);
    this.allergiesSub = this.allergyService.getAllergiesUpdateListener()
      .subscribe((allergies) => {
        this.allergies = allergies;
        if (this.allergies.length > 0) {
          this.hasAllergies = true;
        }
        this.isLoading = false;
      });
  }

  ngOnDestroy(): void {
    this.allergiesSub.unsubscribe();
  }

  onSubmit(): void {
    if (!this.hasAllergies) {
      return;
    }
    this.allergyService.getAllergiesFiltered(this.filterForm.value.filterStr);
  }

  resetFilter(): void {
    this.filterForm.resetForm();
  }

}

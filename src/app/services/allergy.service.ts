import {Injectable} from '@angular/core';
import {fhirclient} from 'fhirclient/lib/types';
import JsonObject = fhirclient.JsonObject;
import * as fhir from 'fhirclient';
import {AllergenIntoleranceModel} from '../models/allergen-intolerance.model';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllergyService {

  private ALLERGY_PATH = '/AllergyIntolerance?patient=';

  private allergies: AllergenIntoleranceModel[] = [];
  private filteredAllergies: AllergenIntoleranceModel[] = [];
  private filteredAllergiesUpdated = new Subject<AllergenIntoleranceModel[]>();

  constructor() {
  }

  async getAllergyData(): Promise<JsonObject[]> {
    const client: any = await fhir.oauth2.ready();
    const patient = await client.patient.read();
    const allergies = await client.request(
      `${this.ALLERGY_PATH}${patient.id}`,
      {flat: true},
    );
    return allergies;
  }

  async getAllergies(): Promise<AllergenIntoleranceModel[]> {
    const allergiesJson = await this.getAllergyData();
    const allergies: AllergenIntoleranceModel[] = allergiesJson?.map(json => {
      const allergen: AllergenIntoleranceModel = {
        id: json.id,
        description: json.code.text,
        criticality: json.criticality,
        category: json.category[0],
        code: json.code.coding[0].code,
        recordedDate: json.recordedDate,
      };
      return allergen;
    });
    this.allergies = allergies;
    this.filteredAllergiesUpdated.next(this.allergies.slice());
    return allergies;
  }

  getAllergiesFiltered(filterString: string): void {
    if (!filterString?.trim()) {
      this.filteredAllergiesUpdated.next(this.allergies.slice());
      return;
    }
    const filteredAllergies = this.allergies.filter((allergy) => {
      return allergy.description.includes(filterString);
    });
    this.filteredAllergies = filteredAllergies;
    this.filteredAllergiesUpdated.next(filteredAllergies.slice());
  }

  getAllergiesUpdateListener(): Observable<AllergenIntoleranceModel[]> {
    return this.filteredAllergiesUpdated.asObservable();
  }

}

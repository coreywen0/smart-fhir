import {Injectable} from '@angular/core';
import Client from 'fhirclient/lib/Client';
import {fhirclient} from 'fhirclient/lib/types';
import Patient = fhirclient.FHIR.Patient;
import JsonObject = fhirclient.JsonObject;
import * as fhir from 'fhirclient';
import {AllergenIntoleranceModel} from '../models/allergen-intolerance.model';

@Injectable({
  providedIn: 'root'
})
export class AllergyService {

  private ALLERGY_PATH = '/AllergyIntolerance?patient=';

  constructor() {
  }

  async getAllergyData(): Promise<JsonObject[]> {
    const client: any = await fhir.oauth2
      .ready()
      .catch(console.error);
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
    return allergies;
  }

}

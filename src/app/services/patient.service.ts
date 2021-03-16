import {Injectable} from '@angular/core';
import Client from 'fhirclient/lib/Client';
import {fhirclient} from 'fhirclient/lib/types';
import Patient = fhirclient.FHIR.Patient;
import * as fhir from 'fhirclient';
import {PatientModel} from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor() {
  }

  async getPatientData(): Promise<any> {
    const client: any = await fhir.oauth2.ready();
    const patient = await client.patient.read();
    return patient;
  }

  async getPatient(): Promise<PatientModel> {
    const patientData = await this.getPatientData();
    const nameData = patientData.name as [];
    let officialName = 'No official name found';
    const otherNames = [];
    nameData.forEach((curNameData: any) => {
      const name = `${curNameData.prefix ?? ''} ${curNameData.given[0]} ${curNameData.family}`;
      if (curNameData?.use === 'official') {
        officialName = name;
      } else {
        otherNames.push(name);
      }
    });
    const patient: PatientModel = {
      id: patientData.id,
      birthDate: patientData.birthDate,
      gender: patientData.gender,
      name: officialName,
      otherNames,
    };
    return patient;
  }

}

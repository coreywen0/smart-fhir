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
    const client: any = await fhir.oauth2.ready().catch(console.error);
    const patient = await client.patient.read();
    console.log('getPatient from patient.service');
    console.log(patient);
    return patient;
  }

  async getPatient(): Promise<PatientModel> {
    const patientData = await this.getPatientData();
    const nameData = patientData.name[0];
    const patient: PatientModel = {
      id: patientData.id,
      birthDate: patientData.birthDate,
      gender: patientData.gender,
      name: `${nameData.prefix} ${nameData.given[0]} ${nameData.family}`,
      otherNames: [],
    };
    return patient;
  }

}

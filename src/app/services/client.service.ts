import {Injectable} from '@angular/core';
import * as fhir from 'fhirclient';
import Client from 'fhirclient/lib/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  async getClientData(): Promise<Client | void> {
    return await fhir.oauth2.ready().catch(console.error);
  }

}

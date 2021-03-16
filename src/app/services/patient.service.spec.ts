import { TestBed } from '@angular/core/testing';

import { PatientService } from './patient.service';
import {HttpErrorResponse} from '@angular/common/http';

describe('PatientService', () => {
  let service: PatientService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { PatientOverviewComponent } from './patient-overview.component';
import {PatientService} from '../../services/patient.service';
import {PatientModel} from '../../models/patient.model';

describe('PatientOverviewComponent', () => {
  let component: PatientOverviewComponent;
  let fixture: ComponentFixture<PatientOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch data if called async', fakeAsync(() => {
    fixture = TestBed.createComponent(PatientOverviewComponent);
    const app = fixture.debugElement.componentInstance;
    const patientService = fixture.debugElement.injector.get(PatientService);
    const testPatient: PatientModel = {
      id: 'id',
      name: 'name',
      otherNames: [],
      birthDate: 'birthDate',
      gender: 'gender',
    };
    const spy = spyOn(patientService, 'getPatient')
      .and.returnValue(Promise.resolve(testPatient));
    fixture.detectChanges();
    tick();
    expect(app.patient).toBe(testPatient);
  }));
});

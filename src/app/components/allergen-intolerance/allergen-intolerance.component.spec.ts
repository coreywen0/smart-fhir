import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergenIntoleranceComponent } from './allergen-intolerance.component';

describe('AllergenIntoleranceComponent', () => {
  let component: AllergenIntoleranceComponent;
  let fixture: ComponentFixture<AllergenIntoleranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllergenIntoleranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergenIntoleranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalSummaryComponent } from './professional-summary.component';

describe('ProfessionalSummaryComponent', () => {
  let component: ProfessionalSummaryComponent;
  let fixture: ComponentFixture<ProfessionalSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessionalSummaryComponent]
    });
    fixture = TestBed.createComponent(ProfessionalSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

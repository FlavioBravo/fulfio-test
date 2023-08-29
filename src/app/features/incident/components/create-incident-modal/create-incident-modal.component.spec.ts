import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIncidentModalComponent } from './create-incident-modal.component';

describe('CreateIncidentModalComponent', () => {
  let component: CreateIncidentModalComponent;
  let fixture: ComponentFixture<CreateIncidentModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateIncidentModalComponent]
    });
    fixture = TestBed.createComponent(CreateIncidentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

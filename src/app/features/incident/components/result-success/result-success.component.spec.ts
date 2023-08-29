import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultSuccessComponent } from './result-success.component';

describe('ResultSuccessComponent', () => {
  let component: ResultSuccessComponent;
  let fixture: ComponentFixture<ResultSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultSuccessComponent]
    });
    fixture = TestBed.createComponent(ResultSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

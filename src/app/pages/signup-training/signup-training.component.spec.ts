import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupTrainingComponent } from './signup-training.component';

describe('SignupTrainingComponent', () => {
  let component: SignupTrainingComponent;
  let fixture: ComponentFixture<SignupTrainingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupTrainingComponent]
    });
    fixture = TestBed.createComponent(SignupTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveparticipantsComponent } from './activeparticipants.component';

describe('ActiveparticipantsComponent', () => {
  let component: ActiveparticipantsComponent;
  let fixture: ComponentFixture<ActiveparticipantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveparticipantsComponent]
    });
    fixture = TestBed.createComponent(ActiveparticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

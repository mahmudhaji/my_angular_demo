import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIslandComponent } from './edit-island.component';

describe('EditIslandComponent', () => {
  let component: EditIslandComponent;
  let fixture: ComponentFixture<EditIslandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditIslandComponent]
    });
    fixture = TestBed.createComponent(EditIslandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

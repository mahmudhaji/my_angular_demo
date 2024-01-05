import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIslandComponent } from './create-island.component';

describe('CreateIslandComponent', () => {
  let component: CreateIslandComponent;
  let fixture: ComponentFixture<CreateIslandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateIslandComponent]
    });
    fixture = TestBed.createComponent(CreateIslandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

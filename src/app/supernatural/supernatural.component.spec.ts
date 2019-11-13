import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupernaturalComponent } from './supernatural.component';

describe('SupernaturalComponent', () => {
  let component: SupernaturalComponent;
  let fixture: ComponentFixture<SupernaturalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupernaturalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupernaturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

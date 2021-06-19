import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaterAdvantagesComponent } from './heater-advantages.component';

describe('HeaterAdvantagesComponent', () => {
  let component: HeaterAdvantagesComponent;
  let fixture: ComponentFixture<HeaterAdvantagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaterAdvantagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaterAdvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

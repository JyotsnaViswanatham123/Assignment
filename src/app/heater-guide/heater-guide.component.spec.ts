import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HeaterGuideComponent } from "./heater-guide.component";

describe("HeaterGuideComponent", () => {
  let component: HeaterGuideComponent;
  let fixture: ComponentFixture<HeaterGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaterGuideComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaterGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

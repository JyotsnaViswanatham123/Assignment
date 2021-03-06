import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { MatSliderChange } from "@angular/material/slider";

@Component({
  selector: "app-side-menu",
  templateUrl: "./side-menu.component.html",
  styleUrls: ["./side-menu.component.scss"],
})
export class SideMenuComponent implements OnInit {
  @Output() slidervalue = new EventEmitter();

  public sliderVal: Number = 50;
  public familyType: String;
  public fuelType: String;
  constructor() {}

  ngOnInit() {
    this.familyType = "Single-Family";
    this.fuelType = "Natural Gas";
  }

  yesSelected: boolean = false;
  noSelected: boolean = true;
  processRadio(actionType) {
    if (actionType === "yes") {
      this.yesSelected = true;
      this.noSelected = false;
    } else {
      this.yesSelected = false;
      this.noSelected = true;
    }
  }

  getSliderValue(event: MatSliderChange) {
    this.sliderVal = event.value;
    this.slidervalue.emit(this.sliderVal);
  }
}

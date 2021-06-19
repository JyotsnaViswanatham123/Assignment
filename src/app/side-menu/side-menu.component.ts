import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-side-menu",
  templateUrl: "./side-menu.component.html",
  styleUrls: ["./side-menu.component.scss"],
})
export class SideMenuComponent implements OnInit {
  public sliderVal: Number;
  public familyType: String;
  public fuelType: String;
  constructor() {}

  ngOnInit() {
    this.sliderVal = 50;
    this.familyType = "Single-Family";
    this.fuelType = "Natural Gas";
  }
}

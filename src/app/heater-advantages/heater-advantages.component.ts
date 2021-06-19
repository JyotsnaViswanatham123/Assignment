import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-heater-advantages",
  templateUrl: "./heater-advantages.component.html",
  styleUrls: ["./heater-advantages.component.scss"],
})
export class HeaterAdvantagesComponent implements OnInit {
  public heaterAdvantages: Object;

  constructor() {}

  ngOnInit() {
    this.heaterAdvantages = [
      {
        heading: "Clean & Healthy Air",
        description: "No in-home air pollution or<br>greenhouse gas emissions",
      },
      {
        heading: "Reduced Carbon Footprint",
        description:
          'Carbon offset equivalent for your<br>home equals <span class="secondary-color">23 trees planted</span>',
      },
      {
        heading: "Lower Energy Bills",
        description: "Up to 75% reduction in energy<br>use",
      },
    ];
  }
}

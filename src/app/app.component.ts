import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public sliderVal: Number;
  title = "waterHeaterEcommerceSite";

  getSliderValue($event) {
    this.sliderVal = $event;
  }
}

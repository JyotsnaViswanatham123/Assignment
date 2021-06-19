import { ApiService } from "./../api.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.scss"],
})
export class ProductsListComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    console.log("test");
    this.apiService.makeARequest(
      "https://6051b8b8fb49dc00175b6997.mockapi.io/api/products",
      {}
    );
  }

  yesSelected: boolean = false;
  noSelected: boolean = false;
  processRadio(actionType) {
    if (actionType === "yes") {
      this.yesSelected = true;
      this.noSelected = false;
    } else {
      this.yesSelected = false;
      this.noSelected = true;
    }
  }
}

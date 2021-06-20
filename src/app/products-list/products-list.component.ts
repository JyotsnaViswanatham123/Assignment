import { ApiService } from "./../api.service";
import { Component, OnInit, Input, DoCheck, SimpleChange } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { ProductDialogComponent } from "../product-dialog/product-dialog.component";

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.scss"],
})
export class ProductsListComponent implements OnInit {
  @Input() sliderVal: Number;
  public productsData: any;
  public data: any;
  public productsToBeDisplayed: any = [];
  constructor(private apiService: ApiService, private dialog: MatDialog) {}
  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    if (
      changes["sliderVal"] &&
      changes["sliderVal"].previousValue != changes["sliderVal"].currentValue
    ) {
      console.log("Slider value changed" + this.sliderVal);
    }
  }

  ngOnInit() {
    this.data = this.apiService.makeARequest(
      "https://6051b8b8fb49dc00175b6997.mockapi.io/api/products",
      {}
    );
    this.productsData = this.data["quotes"]["product_quotes"];
    // .subscribe((data) => {
    //   console.log("****************");
    //   console.log(data["name"]);
    //   console.log("**********");
    // });
    if (!this.sliderVal) {
      this.sliderVal = 40;
    }
    console.log("SSSSSSSSSSSSSS");
    console.log(this.sliderVal);
    console.log("JJJJJJJJ");
    console.log(this.productsData);
    console.log("lllllllllllllll");
    for (let eachProduct of this.productsData) {
      console.log(eachProduct.volume);
      // console.log(this.sliderVal);
      if (eachProduct.volume == this.sliderVal) {
        console.log("Inside");
        this.productsToBeDisplayed.push(eachProduct);
      }
    }
    // console.log(this.productsToBeDisplayed);
  }

  openDialog(modelId) {
    this.dialog.open(ProductDialogComponent, {
      data: {
        current_model_id: modelId,
        products: this.productsToBeDisplayed,
      },
    });
  }
}

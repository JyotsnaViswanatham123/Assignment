import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-product-dialog",
  templateUrl: "./product-dialog.component.html",
  styleUrls: ["./product-dialog.component.scss"],
})
export class ProductDialogComponent implements OnInit {
  public currentProductDetails: any;
  public productsList: any;
  public modelId: Number;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    this.productsList = this.data.products;
    this.modelId = this.data.current_model_id;
    this.productsList.forEach((product, index) => {
      console.log(this.productsList);
      console.log(this.modelId);
      console.log(index);
      if (product.model_id == this.modelId) {
        this.currentProductDetails = product;
        this.currentProductDetails.index = index;
        return;
      }
    });
  }

  getPrevious(index) {
    console.log("prev");
    console.log(index);
    this.currentProductDetails = this.productsList[index - 1];
  }

  getNext(index) {
    console.log("next");
    console.log(index);
    this.currentProductDetails = this.productsList[index + 1];
    this.currentProductDetails.index = index + 1;
    console.log(this.productsList);
    console.log(this.currentProductDetails);
  }
}

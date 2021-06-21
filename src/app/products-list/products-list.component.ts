import { Component, OnInit, Input, SimpleChange } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
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
  public errorText: String = "";
  public images = [
    './assets/img1',
    './assets/img2.png',
    './assets/img3.png'
  ];

  constructor(private dialog: MatDialog) {}
  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    if (
      changes["sliderVal"] &&
      changes["sliderVal"].previousValue != changes["sliderVal"].currentValue
    ) {
      this.productsToBeDisplayed = [];
      for (let eachProduct of this.productsData) {
        if (eachProduct.volume == this.sliderVal) {
          this.productsToBeDisplayed.push(eachProduct);
        }
      }
      if (!this.productsToBeDisplayed.length) {
        this.errorText =
          "Oops! No Products found for the selected volume. Please try again later or checkout other items";
      } else {
        this.errorText = "";
      }
    }
  }

  ngOnInit() {
    fetch("https://6051b8b8fb49dc00175b6997.mockapi.io/api/products", {
      method: "post",
      body: "",
    }).then(response => response.json())
      .then(data => {
        if ( data['data']["quotes"]["product_quotes"]) {
          this.productsData = data['data']["quotes"]["product_quotes"];
          if (!this.sliderVal) {
            this.sliderVal = 50;
          }
          if (!this.productsData) {
            this.errorText =
              "Oops! No Products found at the moment. Please try again later";
          }
          this.productsData.forEach((eachProduct, index) => {
            eachProduct.img =  this.images[index%3];
            if (eachProduct.volume == this.sliderVal) {
              this.productsToBeDisplayed.push(eachProduct);
            }
          });
          if (!this.productsToBeDisplayed) {
            this.errorText =
              "Oops! No Products found for the selected volume. Please try again later or checkout other items";
          }
        } else {
          this.errorText =
              "Oops! No Products found at the moment. Please try again later";
        }
        
    });    
  }

  openDialog(modelId) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.width = "99%";
    dialogConfig.height = "100%";
    dialogConfig.data = {
      current_model_id: modelId,
      products: this.productsToBeDisplayed,
    };
    this.dialog.open(ProductDialogComponent, dialogConfig);
  }
}

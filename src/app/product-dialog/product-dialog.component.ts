import { Component, OnInit, Inject, ElementRef } from "@angular/core";
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
  public productBulletBlock1: any;
  public productBulletBlock2: any;
  public nextButtonDisabled = true;
  public previousButtonDisabled = true;
  public currentImgSrc: String;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private elementRef: ElementRef) {}

  ngOnInit() {
    this.productsList = this.data.products;
    this.modelId = this.data.current_model_id;
    this.productsList.forEach((product, index) => {
      if (product.model_id == this.modelId) {
        this.currentProductDetails = product;
        this.currentProductDetails.index = index;
        this.currentImgSrc = this.currentProductDetails.img;
        this.productBulletBlock1 = this.currentProductDetails.product_bullet_block.slice(0,5);
        this.productBulletBlock2 = this.currentProductDetails.product_bullet_block.slice(5);
        return;
      }
    });
    if(this.productsList.length > 1) {
      this.nextButtonDisabled = false;
    }
  }

  getPrevious(index) {
    if(!this.previousButtonDisabled) {
      if (index-1 == 0) {
        this.previousButtonDisabled = true;
      }
      if (index-2 <= this.productsList.length) {
        this.nextButtonDisabled = false;
      }
      this.currentProductDetails = this.productsList[index - 1];
      this.currentProductDetails.index = index - 1;
      this.currentImgSrc = this.currentProductDetails.img;
    }
    
  }

  getNext(index) {
    if (!this.nextButtonDisabled) {
      this.previousButtonDisabled = false;
      if (index+2 >= this.productsList.length) {
        this.nextButtonDisabled = true;
      }
      this.currentProductDetails = this.productsList[index + 1];
      this.currentProductDetails.index = index + 1;
      this.currentImgSrc = this.currentProductDetails.img;
    }
    
  }

  openImg(src) {
    this.currentImgSrc = src;
  }
 
}

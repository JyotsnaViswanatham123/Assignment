import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SideMenuComponent } from "./side-menu/side-menu.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSliderModule } from "@angular/material/slider";
import { MatSelectModule } from "@angular/material/select";

import { ProductsComponent } from "./products/products.component";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatRadioModule } from "@angular/material/radio";
import { ProductsListComponent } from "./products-list/products-list.component";
import { HeaterAdvantagesComponent } from "./heater-advantages/heater-advantages.component";
import { HeaterGuideComponent } from "./heater-guide/heater-guide.component";
import { MatTabsModule } from "@angular/material/tabs";
import { HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from "@angular/material/dialog";
import { ProductDialogComponent } from "./product-dialog/product-dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    ProductsComponent,
    ProductsListComponent,
    HeaterAdvantagesComponent,
    HeaterGuideComponent,
    ProductDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    MatRadioModule,
    MatTabsModule,
    HttpClientModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ProductDialogComponent],
})
export class AppModule {}

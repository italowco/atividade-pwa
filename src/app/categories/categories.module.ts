import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { CategoriesRoutingModule } from "./categories-routing.module";
import { CategoriesComponent } from "./categories.component";

@NgModule({
  imports: [
    // ...
    // Your routing module for the feature module should be imported here:
    CommonModule,
    CategoriesRoutingModule,
    MaterialModule
  ],
  declarations: [CategoriesComponent]
})
export class CategoriesModule {}

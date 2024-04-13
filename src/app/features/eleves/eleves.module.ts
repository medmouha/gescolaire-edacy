import { CommonModule } from "@angular/common";
import { ElevesListComponent } from "./eleves-list/eleves-list.component";
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [
      ElevesListComponent,
    ],
    imports: [
      CommonModule,
    ]
  })
  export class ElevesModule { }
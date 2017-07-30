import {MdButtonModule, MdCardModule, MdCheckboxModule} from '@angular/material';
import {NgModule} from "@angular/core";

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdCardModule],
  exports: [MdButtonModule, MdCheckboxModule, MdCardModule],
})
export class AngularMaterialModule {
}

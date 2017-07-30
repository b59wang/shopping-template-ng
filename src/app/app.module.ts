import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ItemCardComponent} from "./components/item-card.component";
import {AngularMaterialModule} from "./angular-material.module";

@NgModule({
  declarations: [
    AppComponent,
    ItemCardComponent
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

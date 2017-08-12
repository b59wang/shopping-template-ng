import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ItemCardComponent} from "./components/item-card/item-card.component";
import {AngularMaterialModule} from "./angular-material.module";
import {NavHeaderComponent} from "./components/nav-header/nav-header.component";
import {NavBannerComponent} from "./components/nav-banner/nav-banner.component";

@NgModule({
  declarations: [
    AppComponent,
    ItemCardComponent,
    NavHeaderComponent,
    NavBannerComponent
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

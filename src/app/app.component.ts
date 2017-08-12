import {Component} from '@angular/core';
import {Item} from "./model/item.model";

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <nav-header></nav-header>
    <nav-banner [bannerUrl]="'https://massdrop-s3.imgix.net/img_site/communities/2x/mens_apparel_community_header.jpg'" [bannerName]="'Clothing'"></nav-banner>
    <div>
      <item-card [item]="item"></item-card>
    </div>
  `
})

export class AppComponent {
  title = 'Shopping template';
  item = new Item("TS23","StarWar T-Shirt","https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png","A very cool starwar tshirt",12.99, "Clothing");

}

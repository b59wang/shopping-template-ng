import {Component, Input} from "@angular/core";

@Component({
  selector: 'nav-banner',
  templateUrl: 'nav-banner.component.html',
  styleUrls: ['nav-banner.component.css'],
})
export class NavBannerComponent {

  @Input() bannerUrl: string;
  @Input() bannerName: string;

  constructor() {
  }
}

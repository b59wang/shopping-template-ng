import {Component, Input} from "@angular/core";
import {Item} from "../model/item.model";

@Component({
  selector: 'item-card',
  templateUrl: 'item-card.component.html',
})
export class ItemCardComponent {

  @Input() item: Item;

  constructor() {
  }
}

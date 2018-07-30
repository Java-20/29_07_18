import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-row',
  templateUrl: './item-row.component.html',
  styleUrls: ['./item-row.component.css']
})
export class ItemRowComponent {
  // @Input() itemInput: Item;
  @Input('itemInput') item: Item;
  @Input('indx') index:string;
}

type Item = {
  title:string,
  time:string
}

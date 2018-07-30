import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';


@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent{
  // itemTitle:string = '';
  // itemTime:string = '';

  @ViewChild('inputTime') time:ElementRef;

  @Output('newItem') eventEmitter: EventEmitter<Item> = new EventEmitter();

  addBtnClick(title: HTMLInputElement){
    console.log(this.time);

    let item:Item = {
      title: title.value,
      time: this.time.nativeElement.value
    };
    // console.log(item);
    this.eventEmitter.emit(item);

    title.value = '';
    this.time.nativeElement.value = '';
    // this.itemTime = '';
  }

}
type Item = {
  title:string,
  time:string
}

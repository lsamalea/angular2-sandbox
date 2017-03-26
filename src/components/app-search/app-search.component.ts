import { Component, Output, OnInit, EventEmitter, OnChanges } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-search',
  template: `
    <div class="search">
      <ul>
        <li *ngFor="let item of items$|async">
          <a href="{{item.url}}">{{item.name}}</a>
        </li>

        <input #box (keyup)="onKey(box.value)">

      </ul>
    </div>
  `
})
export class SearchComponent implements OnInit {
   @Output() searchEvent: EventEmitter<{}> = new EventEmitter();

   items$: Observable<Item[]>;

  constructor() {

  }

  ngOnInit() {
    this.items$ = Observable.of<Item[]>([
                              ItemFactory.create({
                                name: "url A",
                                url: "https://jsonplaceholder.typicode.com/comments"
                              }),
                              ItemFactory.create({
                                name: "url B",
                                url: "https://jsonplaceholder.typicode.com/comments"
                              })]);
    // this.searchBox
    //     .valueChanges
    //     .debounceTime(200)
    //     .subscribe((event) => this.searchEvent.emit(event));
  }



 onKey(event: any) { // without type info

    console.profile("onKey");

    this.searchEvent.emit(event);
  }

}


class Item {
  constructor(public name: string,
              public url: string){

  }

}

// Factory
class ItemFactory{
  // wait as parameter a prototype
  static create({name, url}){
    return new Item(name,url);
  }
}

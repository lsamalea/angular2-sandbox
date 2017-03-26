import { Component, Input, OnInit } from '@angular/core';
import {Factory} from 'abstracts';
import {ArticleFactory, Article} from 'models';
import {DataService} from 'services';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  template: `
    <div id="container">
      <app-sidebar ></app-sidebar>
      <app-search (searchEvent)="onSearch($event)" ></app-search>
      <div id="content">
        <app-comment *ngFor="let comment of comments$|async"
                             [comment]="comment">
        </app-comment>
      </div>
    </div>
  `,
  styleUrls: ['./app-root.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit {
  comments$:  Observable<Component[]>;

  constructor(private dataService: DataService) {

  }

  onSearch($event){
    console.profileEnd();
     console.log($event);
  }

  ngOnInit(){
    this.comments$ = this.dataService.getComments();
  }
}

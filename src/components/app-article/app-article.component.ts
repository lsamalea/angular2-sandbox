import { Component, Input } from '@angular/core';
import {DataService} from 'services';

@Component({
  selector: 'app-article',
  template: `
    <div>
      <h2>{{article.title}}</h2>
      <p>{{article.description}}</p>
      <p>Date: {{article.date() | date : 'medium'}}</p>
    </div>
  `
})
export class ArticleComponent{
  @Input() article: Object;

  constructor(){

  }


}



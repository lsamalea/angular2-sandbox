import { Component, Input } from '@angular/core';
import {DataService} from 'services';

@Component({
  selector: 'app-comment',
  template: `
    <div>
      <h2>{{comment.postId}}</h2>
      <p>{{comment.description}}</p>
      <p>Name: {{comment.name}}</p>
      <p>Email: {{comment.email}}</p>
      <p>Body: {{comment.body}}</p>
    </div>
  `
})
export class CommentComponent{
  @Input() comment: Object;

  constructor(){

  }


}


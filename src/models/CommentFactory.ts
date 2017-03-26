import {Factory} from 'abstracts';
import {Comment} from 'models/Comment';
/**
 * @class CommentComponent
 */
export class CommentFactory implements Factory{
  /**
   * create Comment
   * @param param : {id, postId, name, email, body}
   */
  public create({id, postId, name, email, body}){
    return new Comment(id, postId, name, email, body);
  }
}

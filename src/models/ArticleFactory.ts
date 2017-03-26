import {Factory} from 'abstracts';
import {Article} from 'models/Article';
/**
 * @class ArticleComponent
 */
export class ArticleFactory implements Factory{
  /**
   * create article
   * @param param : {string, string}
   */
  public create({title, description}){
    return new Article(title, description);
  }
}

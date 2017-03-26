
export class Article {
  constructor(
    public title: string,
    public description: string
  ) { }

  public date() {
    return new Date();
  }
}

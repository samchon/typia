import { v4 } from "uuid";

export class BbsArticleService {
  articles = [];
  /**
   * Get all articles.
   *
   * List up every articles archived in the BBS DB.
   *
   * @returns List of every articles
   */
  index() {
    return this.articles;
  }
  /**
   * Create a new article.
   *
   * Writes a new article and archives it into the DB.
   *
   * @param props Properties of create function
   * @returns Newly created article
   */
  create(props) {
    const article = {
      id: v4(),
      title: props.input.title,
      body: props.input.body,
      thumbnail: props.input.thumbnail,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    this.articles.push(article);
    return article;
  }
  /**
   * Update an article.
   *
   * Updates an article with new content.
   *
   * @param props Properties of update function
   * @param input New content to update
   */
  update(props) {
    const article = this.articles.find((a) => a.id === props.id);
    if (article === undefined)
      throw new Error("Unable to find the matched article.");
    if (props.input.title !== undefined) article.title = props.input.title;
    if (props.input.body !== undefined) article.body = props.input.body;
    if (props.input.thumbnail !== undefined)
      article.thumbnail = props.input.thumbnail;
    article.updated_at = new Date().toISOString();
  }
  /**
   * Erase an article.
   *
   * Erases an article from the DB.
   *
   * @param props Properties of erase function
   */
  erase(props) {
    const index = this.articles.findIndex((a) => a.id === props.id);
    if (index === -1) throw new Error("Unable to find the matched article.");
    this.articles.splice(index, 1);
  }
}

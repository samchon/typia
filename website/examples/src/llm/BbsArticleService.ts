import { tags } from "typia";
import { v4 } from "uuid";

import { IBbsArticle } from "./IBbsArticle";

export class BbsArticleService {
  private readonly articles: IBbsArticle[] = [];

  /**
   * Get all articles.
   *
   * List up every articles archived in the BBS DB.
   *
   * @returns List of every articles
   */
  public index(): IBbsArticle[] {
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
  public create(props: {
    /**
     * Information of the article to create
     */
    input: IBbsArticle.ICreate;
  }): IBbsArticle {
    const article: IBbsArticle = {
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
  public update(props: {
    /**
     * Target article's {@link IBbsArticle.id}.
     */
    id: string & tags.Format<"uuid">;

    /**
     * New content to update.
     */
    input: IBbsArticle.IUpdate;
  }): void {
    const article: IBbsArticle | undefined = this.articles.find(
      (a) => a.id === props.id,
    );
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
  public erase(props: {
    /**
     * Target article's {@link IBbsArticle.id}.
     */
    id: string & tags.Format<"uuid">;
  }): void {
    const index: number = this.articles.findIndex((a) => a.id === props.id);
    if (index === -1) throw new Error("Unable to find the matched article.");
    this.articles.splice(index, 1);
  }
}

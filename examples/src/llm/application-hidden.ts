import { ILlmApplication } from "@samchon/openapi";
import typia, { tags } from "typia";

import { IBbsArticle } from "./IBbsArticle";

const app: ILlmApplication<"chatgpt"> = typia.llm.application<
  BbsArticleController,
  "chatgpt"
>();

console.log(app);

interface BbsArticleController {
  /**
   * Create a new article.
   *
   * Writes a new article and archives it into the DB.
   *
   * @param props Properties of create function
   * @returns Newly created article
   */
  create(props: {
    /**
     * Information of the article to create
     */
    input: IBbsArticle.ICreate;
  }): Promise<IBbsArticle>;

  /**
   * Read an article.
   *
   * Reads an article from the DB.
   *
   * @param props Properties of read function
   * @returns The article
   * @hidden
   */
  at(props: {
    /**
     * Target article's {@link IBbsArticle.id}.
     */
    id: string & tags.Format<"uuid">;
  }): Promise<IBbsArticle>;

  /**
   * Update an article.
   *
   * Updates an article with new content.
   *
   * @param props Properties of update function
   * @param input New content to update
   * @internal
   */
  update(props: {
    /**
     * Target article's {@link IBbsArticle.id}.
     */
    id: string & tags.Format<"uuid">;

    /**
     * New content to update.
     */
    input: IBbsArticle.IUpdate;
  }): Promise<void>;

  /**
   * Erase an article.
   *
   * Erases an article from the DB.
   *
   * @param props Properties of erase function
   * @human
   */
  erase(props: {
    /**
     * Target article's {@link IBbsArticle.id}.
     */
    id: string & tags.Format<"uuid">;
  }): Promise<void>;
}

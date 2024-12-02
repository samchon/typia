import {
  ClaudeTypeChecker,
  ILlmApplication,
  ILlmSchema,
} from "@samchon/openapi";
import typia, { tags } from "typia";

const app: ILlmApplication<"claude"> = typia.llm.application<
  BbsArticleController,
  "claude"
>({
  separate: (schema: ILlmSchema<"claude">) =>
    ClaudeTypeChecker.isString(schema) && schema.contentMediaType !== undefined,
});

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
   * Update an article.
   *
   * Updates an article with new content.
   *
   * @param props Properties of update function
   * @param input New content to update
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
   */
  erase(props: {
    /**
     * Target article's {@link IBbsArticle.id}.
     */
    id: string & tags.Format<"uuid">;
  }): Promise<void>;
}

/**
 * Article entity.
 *
 * `IBbsArticle` is an entity representing an article in the BBS (Bulletin Board System).
 */
interface IBbsArticle extends IBbsArticle.ICreate {
  /**
   * Primary Key.
   */
  id: string & tags.Format<"uuid">;

  /**
   * Creation time of the article.
   */
  created_at: string & tags.Format<"date-time">;

  /**
   * Last updated time of the article.
   */
  updated_at: string & tags.Format<"date-time">;
}
namespace IBbsArticle {
  /**
   * Information of the article to create.
   */
  export interface ICreate {
    /**
     * Title of the article.
     *
     * Representative title of the article.
     */
    title: string;

    /**
     * Content body.
     *
     * Content body of the article writtn in the markdown format.
     */
    body: string;

    /**
     * Thumbnail image URI.
     *
     * Thumbnail image URI which can represent the article.
     *
     * If configured as `null`, it means that no thumbnail image in the article.
     */
    thumbnail:
      | null
      | (string & tags.Format<"uri"> & tags.ContentMediaType<"image/*">);
  }

  /**
   * Information of the article to update.
   *
   * Only the filled properties will be updated.
   */
  export type IUpdate = Partial<ICreate>;
}

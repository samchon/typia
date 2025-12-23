import { ILlmSchema } from "@samchon/openapi";
import typia, { tags } from "typia";

export const $defs: Record<string, ILlmSchema> = {};
export const schema: ILlmSchema = typia.llm.schema<
  IBbsArticle,
  { reference: true }
>($defs);

/**
 * Article entity.
 *
 * `IBbsArticle` is an entity representing an article in the BBS (Bulletin Board
 * System).
 */
interface IBbsArticle {
  /** Primary Key. */
  id: string & tags.Format<"uuid">;

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

  /** Creation time of the article. */
  created_at: string & tags.Format<"date-time">;

  /** Last updated time of the article. */
  updated_at: string & tags.Format<"date-time">;
}

import typia from "typia";

export const assertArticle = typia.createAssert<IBbsArticle>();

export interface IBbsArticle {
  /**
   * Primary Key.
   *
   * @format uuid
   */
  id: string;

  /**
   * List of attached files.
   *
   * @minItems 1
   */
  files: IAttachmentFile[] | null;

  /**
   * Title of the article.
   *
   * @minLength 5
   * @maxLength 100
   */
  title: string | null;

  /**
   * Main content body of the article.
   */
  body: string;

  /**
   * Creation time of article.
   *
   * @format date-time
   */
  created_at: string;
}

export interface IAttachmentFile {
  /**
   * File name.
   *
   * @pattern ^[a-z0-9]+$
   * @maxLength 255
   */
  name: string | null;

  /**
   * File extension.
   *
   * @pattern ^[a-z0-9]+$
   * @maxLength 8
   */
  extension: string | null;

  /**
   * URL of the file.
   *
   * @format uri
   */
  url: string;
}

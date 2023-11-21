import typia from "typia";

/**
 * An article of BBS.
 *
 * Let's see how TypeScript parses comments on an interface type.
 *
 * It will also contain the link tag like {@link IAttachmentFile}.
 *
 * @author Samchon
 * @deprecated
 * @test
 */
export interface IBbsArticle extends IBbsArticle.IStore {
  /**
   * @format uuid
   */
  id: string;

  /**
   * @format date-time
   */
  created_at: string;
}
export namespace IBbsArticle {
  export interface IStore {
    /**
     * @minLength 3
     * @maxLength 50
     * @doYouKnowThisTag
     */
    title: string;
    body: string;
    files: IAttachmentFile[];
  }
}

export interface IAttachmentFile {
  /**
   * @minLengt 1
   * @maxLength 255
   */
  name: string | null;

  /**
   * @minLength 1
   * @maxLength 8
   */
  extension: string | null;

  /**
   * @format url
   */
  url: string;
}

const article = typia.reflect.metadata<[IBbsArticle]>().components.objects[0];
const file = typia.reflect.metadata<[IAttachmentFile]>().components.objects[0];

console.log(
  article?.description,
  article?.properties.map((p) => p.description),
  file?.properties.map((p) => p.description),
);

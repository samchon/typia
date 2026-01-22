import { tags } from "typia";

interface IMember {
  /**
   * Primary Key.
   *
   * This description would be the description of LLM schema.
   */
  id: string;

  /**
   * Below "Age of the member" would be the title of LLM schema.
   *
   * @title Age of the member
   */
  age: number &
    tags.Type<"uint32"> &
    tags.ExclusiveMinimum<19> &
    tags.Maximum<100>;

  /**
   * @title Email address of the member
   * @description The description property also can be filled by
   *              the comment tag `@description`. Instead, be
   *              careful about the indentation.
   */
  email: string & tags.Format<"email">;
}

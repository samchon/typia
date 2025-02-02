import { tags } from "typia";
import { v4 } from "uuid";

import { Spoiler } from "../helpers/Spoiler";

/**
 * An interface designed to test JSON schema's object description.
 *
 * @title This is the title of object type
 * @author Samchon
 */
export interface ObjectDescription {
  /**
   * Primary Key.
   *
   * @info Must be unique
   */
  id: string & tags.Format<"uuid">;

  /**
   * Deprecated property.
   *
   * If `@deprecated` comment tag being utilized, the property will be marked
   * as deprecated in the JSON schema.
   *
   * @deprecated
   */
  deprecated: boolean;

  /**
   * Title tag can replace the first line of the comment.
   *
   * @title This is the title
   */
  title: string;

  /**
   * Description property.
   *
   * If you write first line and the first line ends with "." character,
   * it would be considered as the title. By the way, description does
   * not exclusive the title, so that full content be written.
   */
  descriptions: string[];

  /**
   * New line before dot character
   *
   * If dot character (".") being used before the first new line, it would not
   * be considered as title in the JSON schema.
   */
  newLine: number;
}
export namespace ObjectDescription {
  export function generate(): ObjectDescription {
    return {
      id: v4(),
      deprecated: false,
      title: "This is the title",
      descriptions: ["This is the first line.", "This is the second line."],
      newLine: 3.141592,
    };
  }

  export const SPOILERS: Spoiler<ObjectDescription>[] = [
    (input) => {
      input.id = "not-uuid" as any;
      return ["$input.id"];
    },
    (input) => {
      input.deprecated = undefined!;
      return ["$input.deprecated"];
    },
    (input) => {
      input.title = 3.141592 as any;
      return ["$input.title"];
    },
    (input) => {
      input.descriptions = {
        length: 0,
        "0": "This is the first line.",
      } as any;
      return ["$input.descriptions"];
    },
    (input) => {
      input.newLine = "not-number" as any;
      return ["$input.newLine"];
    },
  ];
}

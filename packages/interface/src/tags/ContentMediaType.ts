import { TagBase } from "./TagBase";

/**
 * String content MIME type metadata.
 *
 * `ContentMediaType<Type>` specifies how string content should be interpreted.
 * No validation performed, metadata only.
 *
 * @template Value MIME type (e.g., "application/json", "image/png")
 * @author Jeongho Nam - https://github.com/samchon
 */
export type ContentMediaType<Value extends string> = TagBase<{
  target: "string";
  kind: "contentMediaType";
  value: undefined;
  schema: {
    contentMediaType: Value;
  };
}>;

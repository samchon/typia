import { TagBase } from "./TagBase";

/**
 * MIME type metadata for string content.
 *
 * `ContentMediaType<Type>` is a type tag that documents the media type of
 * string content. This is metadata-only - no runtime validation is performed.
 * The information appears in generated JSON Schema output.
 *
 * This is useful when a string property contains encoded binary data or
 * structured content that should be interpreted according to a specific media
 * type, such as base64-encoded images or embedded JSON.
 *
 * Common MIME types:
 *
 * - `"application/json"`: JSON data as string
 * - `"application/xml"`: XML data as string
 * - `"image/png"`: Base64-encoded PNG image
 * - `"image/jpeg"`: Base64-encoded JPEG image
 * - `"application/octet-stream"`: Generic binary data
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @example
 *   interface Document {
 *     // Base64-encoded PNG image
 *     thumbnail: string & ContentMediaType<"image/png">;
 *     // JSON stored as string
 *     metadata: string & ContentMediaType<"application/json">;
 *   }
 *
 * @template Value MIME type string literal
 */
export type ContentMediaType<Value extends string> = TagBase<{
  target: "string";
  kind: "contentMediaType";
  value: undefined;
  schema: {
    contentMediaType: Value;
  };
}>;

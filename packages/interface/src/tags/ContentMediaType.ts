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
 *
 * @example
 *   interface Document {
 *     // Base64-encoded PNG image
 *     thumbnail: string & ContentMediaType<"image/png">;
 *     // JSON stored as string
 *     metadata: string & ContentMediaType<"application/json">;
 *   }
 *
 * @template Value MIME type string literal
 *
 * @evidence contracts/common.md#principled-implementation The tag records the MIME string literal in `schema.contentMediaType` for string targets, matching the JSON Schema keyword of that name. `value` is undefined and there is no `validate`, so the type documents the encoding without claiming to check the content.
 * @evidence contracts/common.md#clear-and-simple-design One TagBase record, parameterized by the media type literal; no helpers.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Metadata only; no runtime decoding or content sniffing is implied or faked.
 * @evidence contracts/common.md#meaningful-documentation The comment states that it is metadata-only, lists common MIME values and shows both an encoded-image and JSON-in-string example.
 */
export type ContentMediaType<Value extends string> = TagBase<{
  target: "string";
  kind: "contentMediaType";
  value: undefined;
  schema: {
    contentMediaType: Value;
  };
}>;

import { TagBase } from "./TagBase";

/**
<<<<<<< HEAD
 * String content media type constraint tag.
 *
 * Specifies the MIME type of string content for proper interpretation. This tag
 * serves as metadata to indicate how the string content should be interpreted,
 * but does not perform validation on the content itself.
 *
 * Examples: type JsonData = string & ContentMediaType<"application/json">; //
 * JSON string type Base64Image = string & ContentMediaType<"image/png">; //
 * Base64 PNG type XmlContent = string & ContentMediaType<"application/xml">; //
 * XML data
 *
 * Common MIME types: application/json, text/html, image/jpeg, image/png,
 * application/pdf, text/plain, application/xml, and many more.
 *
 * @author Jeongho Nam - https://github.com/samchon
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export type ContentMediaType<Value extends string> = TagBase<{
  target: "string";
  kind: "contentMediaType";
  value: undefined;
  schema: {
    contentMediaType: Value;
  };
}>;

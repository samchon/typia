import { TagBase } from "./TagBase";

/**
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
 */
export type ContentMediaType<Value extends string> = TagBase<{
  target: "string";
  kind: "contentMediaType";
  value: undefined;
  schema: {
    contentMediaType: Value;
  };
}>;

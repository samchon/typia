import type { TagBase } from "./TagBase";

/**
 * String format constraint tag.
 *
 * Validates strings against predefined formats for common use cases. This tag
 * provides built-in validation for standard string formats without needing to
 * write custom regular expressions.
 *
 * Examples:
 *
 * ```ts
 * Type Email = string & Format<"email">; // user@example.com
 * Type WebURL = string & Format<"url">; // https://example.com
 * Type DateTime = string & Format<"date-time">; // 2024-01-15T10:30:00Z
 * ```
 *
 * Supported formats include:
 *
 * - Network: email, url, hostname, ipv4, ipv6, uri
 * - Identifiers: uuid, byte, password
 * - Date/Time: date, time, date-time, duration
 * - Data: json-pointer, regex
 * - Internationalized: idn-email, idn-hostname, iri
 *
 * Note: This tag is mutually exclusive with the Pattern tag. You cannot use
 * both Format and Pattern on the same type.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export type Format<Value extends Format.Value> = TagBase<{
  target: "string";
  kind: "format";
  value: Value;
  validate: `$importInternal("isFormat${PascalizeString<Value>}")($input)`;
  exclusive: ["format", "pattern"];
  schema: {
    format: Value;
  };
}>;
export namespace Format {
  export type Value =
    | "byte"
    | "password"
    | "regex"
    | "uuid"
    | "email"
    | "hostname"
    | "idn-email"
    | "idn-hostname"
    | "iri"
    | "iri-reference"
    | "ipv4"
    | "ipv6"
    | "uri"
    | "uri-reference"
    | "uri-template"
    | "url"
    | "date-time"
    | "date"
    | "time"
    | "duration"
    | "json-pointer"
    | "relative-json-pointer";
}

type PascalizeString<Key extends string> = Key extends `-${infer R}`
  ? `${PascalizeString<R>}`
  : Key extends `${infer _F}-${infer _R}`
    ? PascalizeSnakeString<Key>
    : Capitalize<Key>;
type PascalizeSnakeString<Key extends string> = Key extends `-${infer R}`
  ? PascalizeSnakeString<R>
  : Key extends `${infer F}${infer M}-${infer R}`
    ? `${Uppercase<F>}${Lowercase<M>}${PascalizeSnakeString<R>}`
    : Key extends `${infer F}${infer R}`
      ? `${Uppercase<F>}${Lowercase<R>}`
      : Key;

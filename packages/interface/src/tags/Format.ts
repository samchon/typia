import type { TagBase } from "./TagBase";

/**
 * String format validation constraint.
 *
 * `Format<Value>` validates strings against predefined formats (email, uuid,
 * url, date-time, etc.). Mutually exclusive with {@link Pattern}.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Value Format identifier (see {@link Format.Value} for options)
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
  /**
   * Supported format identifiers.
   *
   * Standard JSON Schema formats:
   *
   * - `email`, `idn-email`: Email addresses
   * - `hostname`, `idn-hostname`: Hostnames
   * - `uri`, `uri-reference`, `uri-template`, `url`: URLs
   * - `iri`, `iri-reference`: Internationalized URLs
   * - `uuid`: UUID strings
   * - `ipv4`, `ipv6`: IP addresses
   * - `date-time`, `date`, `time`, `duration`: Date/time formats
   * - `json-pointer`, `relative-json-pointer`: JSON pointers
   * - `regex`: Regular expression patterns
   * - `byte`: Base64-encoded data
   * - `password`: Password fields (for documentation only)
   */
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

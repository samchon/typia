import type { TagBase } from "./TagBase";

/**
 * String format validation constraint.
 *
 * `Format<Value>` validates strings against predefined formats (email, uuid,
 * url, date-time, etc.). Mutually exclusive with {@link Pattern}.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @template Value Format identifier (see {@link Format.Value} for options)
 *
 * @evidence contracts/common.md#principled-implementation The validate expression calls an internal `isFormat<Pascal>` function chosen by converting the hyphenated format name to PascalCase, and the same literal is written to `schema.format`; the Format.Value union limits the names to formats for which such a function exists. The tag excludes Pattern.
 * @evidence contracts/common.md#clear-and-simple-design The PascalizeString helpers translate `-` words only, and the namespace holds just the Value union that parameterizes the tag.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The runtime function is looked up from a closed set of names defined by the contract, not injected from a consumer. The `password` format is documentation only and has no strength rule.
 * @evidence contracts/common.md#meaningful-documentation The comment gives the purpose, the exclusivity with Pattern and links to Format.Value which lists the formats.
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
   * JSON Schema format identifiers and typia extensions:
   *
   * - `email`, `idn-email`: Email addresses
   * - `hostname`, `idn-hostname`: Hostnames
   * - `uri`, `uri-reference`, `uri-template`: URI forms
   * - `iri`, `iri-reference`: Internationalized URI forms
   * - `url`: Public web URLs (http, https or ftp; dotted domains or public IPv4)
   * - `uuid`: UUID strings
   * - `ipv4`, `ipv6`: IP addresses
   * - `date-time`, `date`, `time`, `duration`: Date/time formats
   * - `json-pointer`, `relative-json-pointer`: JSON pointers
   * - `regex`: Regular expression patterns
   * - `byte`: Base64-encoded data
   * - `password`: Password fields (for documentation only)
   *
   * @evidence contracts/common.md#principled-implementation A closed literal union names the supported JSON Schema format identifiers and the `url`, `byte` and `password` extensions. The URL extension uses the public-web grammar; generic URI forms have their own identifiers.
   * @evidence contracts/common.md#clear-and-simple-design One union; the tag uses it both as the type parameter bound and as the schema value.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A static name list; it does not validate anything itself, and its membership has to match the runtime functions that implement each format.
   * @evidence contracts/common.md#meaningful-documentation The comment groups the formats by family and notes that password is documentation only.
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

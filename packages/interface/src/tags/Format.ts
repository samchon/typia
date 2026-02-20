import type { TagBase } from "./TagBase";

/**
 * String format validation constraint.
 *
 * `Format<Value>` validates strings against predefined formats (email, uuid,
 * url, date-time, etc.). Mutually exclusive with {@link Pattern}.
 *
 * @template Value Format identifier (see {@link Format.Value} for options)
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

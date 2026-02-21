import { TagBase } from "./TagBase";

/**
 * Regular expression pattern constraint for strings.
 *
 * `Pattern<Regex>` is a type tag that validates string values match the
 * specified regular expression pattern. Apply it to `string` properties using
 * TypeScript intersection types.
 *
 * This constraint is **mutually exclusive** with {@link Format} - you cannot use
 * both on the same property. Use `Pattern` for custom regex validation, or
 * `Format` for standard formats (email, uuid, etc.).
 *
 * The pattern should be a valid JavaScript regular expression string without
 * the surrounding slashes. The entire string must match (implicit `^` and `$`
 * anchors).
 *
 * The constraint is enforced at runtime by `typia.is()`, `typia.assert()`, and
 * `typia.validate()`. It generates `pattern` in JSON Schema output.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @example
 *   interface Product {
 *     // SKU format: 3 letters, dash, 4 digits
 *     sku: string & Pattern<"^[A-Z]{3}-[0-9]{4}$">;
 *     // Phone number: digits and optional dashes
 *     phone: string & Pattern<"^[0-9-]+$">;
 *   }
 *
 * @template Value Regular expression pattern as a string literal
 */
export type Pattern<Value extends string> = TagBase<{
  target: "string";
  kind: "pattern";
  value: Value;
  validate: `RegExp("${Serialize<Value>}").test($input)`;
  exclusive: ["format", "pattern"];
  schema: {
    pattern: Value;
  };
}>;

type Serialize<T extends string, Output extends string = ""> = string extends T
  ? never
  : T extends ""
    ? Output
    : T extends `${infer P}${infer R}`
      ? Serialize<R, `${Output}${P extends keyof Escaper ? Escaper[P] : P}`>
      : never;

type Escaper = {
  '"': '\\"';
  "\\": "\\\\";
  "\b": "\\b";
  "\f": "\\f";
  "\n": "\\n";
  "\r": "\\r";
  "\t": "\\t";
};

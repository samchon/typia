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
 * the surrounding slashes. It is tested with `RegExp.prototype.test`, which
 * matches anywhere in the string, so anchor it with `^` and `$` to require that
 * the entire string match, as in JSON Schema `pattern`.
 *
 * The constraint is enforced at runtime by `typia.is()`, `typia.assert()`, and
 * `typia.validate()`. It generates `pattern` in JSON Schema output.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @example
 *   interface Product {
 *     // SKU format: 3 letters, dash, 4 digits
 *     sku: string & Pattern<"^[A-Z]{3}-[0-9]{4}$">;
 *     // Phone number: digits and optional dashes
 *     phone: string & Pattern<"^[0-9-]+$">;
 *   }
 *
 * @template Value Regular expression pattern as a string literal
 *
 * @evidence contracts/common.md#principled-implementation The validate text builds `RegExp("<escaped>").test($input)`, where the private Serialize walks the pattern literal and escapes quote, backslash and control characters so the emitted string literal evaluates back to the original pattern; `string` and other non-literal types produce `never`. The test is unanchored, so a pattern matches anywhere unless it carries its own anchors, which the comment now states. It excludes Format.
 * @evidence contracts/common.md#clear-and-simple-design The Serialize and Escaper helpers handle one concern, string-literal escaping, and keep the tag declaration to a single template.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The escaping follows JavaScript string-literal grammar and the pattern is not rewritten or special-cased by content.
 * @evidence contracts/common.md#meaningful-documentation The comment states that the pattern is a regular expression source without slashes, how it is tested, why it excludes Format and shows SKU and phone examples.
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

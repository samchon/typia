import { TagBase } from "./TagBase";

/**
 * String pattern (regular expression) constraint tag.
 *
 * Validates that a string matches a specified regular expression pattern. Use
 * this tag to enforce custom string formats through regex validation.
 *
 * Examples:
 *
 * ```ts
 * type PhoneNumber = string & Pattern<"^\d{3}-\d{3}-\d{4}$">; // 123-456-7890
 * type HexColor = string & Pattern<"^#[0-9A-Fa-f]{6}$">; // #FF5733
 * ```
 *
 * Note: This tag is mutually exclusive with the Format tag. You cannot use both
 * Pattern and Format on the same type.
 *
 * @author Jeongho Nam - https://github.com/samchon
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

/// reference: https://github.com/type-challenges/type-challenges/issues/22394#issuecomment-1397158205
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

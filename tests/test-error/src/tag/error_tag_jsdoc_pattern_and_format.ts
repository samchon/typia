import typia from "typia";

// Reverse order of error_tag_jsdoc_format_and_pattern: exclusivity is
// symmetric, so declaring `@pattern` before `@format` must reject too. Pattern
// declares `exclusive: ["format", "pattern"]`.
interface IValue {
  /**
   * @pattern ^x
   * @format email
   */
  value: string;
}
typia.createIs<IValue>();

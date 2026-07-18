import typia from "typia";

// Reverse order of error_tag_jsdoc_minimum_and_exclusive_minimum: exclusivity
// is symmetric, so declaring `@exclusiveMinimum` before `@minimum` must reject
// too. ExclusiveMinimum declares `exclusive: ["exclusiveMinimum", "minimum"]`.
interface IValue {
  /**
   * @exclusiveMinimum 5
   * @minimum 0
   */
  value: number;
}
typia.createIs<IValue>();

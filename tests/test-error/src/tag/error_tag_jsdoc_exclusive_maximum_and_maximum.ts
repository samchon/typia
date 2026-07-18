import typia from "typia";

// Reverse order of error_tag_jsdoc_maximum_and_exclusive_maximum: exclusivity
// is symmetric, so declaring `@exclusiveMaximum` before `@maximum` must reject
// too. ExclusiveMaximum declares `exclusive: ["exclusiveMaximum", "maximum"]`.
interface IValue {
  /**
   * @exclusiveMaximum 5
   * @maximum 10
   */
  value: number;
}
typia.createIs<IValue>();

import typia from "typia";

// ExclusiveMaximum declares `exclusive: ["exclusiveMaximum", "maximum"]`, naming
// its own kind first, so one property may never carry two `@exclusiveMaximum`
// tags: the emitted schema keeps one bound while the validator enforces both.
interface IValue {
  /**
   * @exclusiveMaximum 10
   * @exclusiveMaximum 5
   */
  value: number;
}
typia.createIs<IValue>();

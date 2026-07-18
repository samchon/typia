import typia from "typia";

// ExclusiveMinimum declares `exclusive: ["exclusiveMinimum", "minimum"]`, naming
// its own kind first, so one property may never carry two `@exclusiveMinimum`
// tags: the emitted schema keeps one bound while the validator enforces both.
interface IValue {
  /**
   * @exclusiveMinimum 5
   * @exclusiveMinimum 0
   */
  value: number;
}
typia.createIs<IValue>();

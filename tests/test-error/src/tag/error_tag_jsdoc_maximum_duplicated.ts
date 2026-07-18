import typia from "typia";

// Maximum declares `exclusive: ["maximum", "exclusiveMaximum"]`, naming its own
// kind first, so one property may never carry two `@maximum` tags: the emitted
// schema keeps one `maximum` while the generated validator enforces both.
interface IValue {
  /**
   * @maximum 10
   * @maximum 5
   */
  value: number;
}
typia.createIs<IValue>();

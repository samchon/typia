import typia from "typia";

// Minimum declares `exclusive: ["minimum", "exclusiveMinimum"]`, naming its own
// kind first, so one property may never carry two `@minimum` tags: the emitted
// schema keeps one `minimum` while the generated validator enforces both.
interface IValue {
  /**
   * @minimum 5
   * @minimum 0
   */
  value: number;
}
typia.createIs<IValue>();

import typia from "typia";

// The JSDoc path must enforce the same exclusivity as the type tags: Minimum
// declares `exclusive: ["minimum", "exclusiveMinimum"]`, so `@minimum` and
// `@exclusiveMinimum` on one property is a compile error, just as
// `number & Minimum<0> & ExclusiveMinimum<5>` is.
interface IValue {
  /**
   * @minimum 0
   * @exclusiveMinimum 5
   */
  value: number;
}
typia.createIs<IValue>();

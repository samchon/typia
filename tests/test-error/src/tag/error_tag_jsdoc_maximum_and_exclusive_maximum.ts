import typia from "typia";

// The JSDoc path must enforce the same exclusivity as the type tags: Maximum
// declares `exclusive: ["maximum", "exclusiveMaximum"]`, so `@maximum` and
// `@exclusiveMaximum` on one property is a compile error, just as
// `number & Maximum<10> & ExclusiveMaximum<5>` is.
interface IValue {
  /**
   * @maximum 10
   * @exclusiveMaximum 5
   */
  value: number;
}
typia.createIs<IValue>();

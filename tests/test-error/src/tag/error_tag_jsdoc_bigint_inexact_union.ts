import typia from "typia";

// The number part of a `number | bigint` property reads a tag's text as
// `Number()` does, but the bigint part cannot state 9007199254740993, nor
// 5.0000000000000001, which `Number()` reads as 5. Its constraint used to be
// rounded, or dropped without a word (#2457), and is rejected instead.
interface IInexact {
  /** @multipleOf 9007199254740993 */
  value: number | bigint;
}
interface INearInteger {
  /** @minimum 5.0000000000000001 */
  value: number | bigint;
}
typia.createRandom<IInexact>();
typia.createIs<INearInteger>();

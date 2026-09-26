import typia from "typia";

// The number part of a `number | bigint` property reads a tag's text as
// `Number()` does, but the bigint part cannot state 9007199254740993. Its
// constraint used to be rounded (#2457) and is rejected instead.
interface IInexact {
  /** @multipleOf 9007199254740993 */
  value: number | bigint;
}
typia.createRandom<IInexact>();

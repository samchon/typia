import typia from "typia";

// `Number()` reads 5.0000000000000001 as 5, but the text writes no integer, so
// no bigint bound states it. The bigint part of a `number | bigint` property
// used to be left unconstrained without a word (#2457), and is rejected.
interface INearInteger {
  /** @minimum 5.0000000000000001 */
  value: number | bigint;
}
typia.createIs<INearInteger>();

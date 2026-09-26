import typia from "typia";

// A bigint tag bound is carried as a double. 9007199254740993 is no double, so
// the bound validators enforced 9007199254740992 while `@multipleOf` stayed
// exact, and `random` generated values the validator rejects (#2457). A bigint
// target cannot state the value and is rejected.
interface IBigint {
  /** @minimum 9007199254740993 */
  value: bigint;
}
typia.createIs<IBigint>();

import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies typia.reflect.literals returns a bigint member as an exact bigint.
 *
 * Typescript-go reports a bigint literal as an internal `PseudoBigInt` struct
 * that no consumer could name, so the emitter reflected its fields and produced
 * `{ base10Value: "2", negative: false }` where `literals<2n>(): 2n[]` promises
 * a bigint. Magnitude is the half a happy-path case would miss: a bigint exists
 * to hold what a `number` cannot, and the emitted call used to pass its digits
 * as a number literal that rounded before `BigInt` ever parsed them.
 *
 * 1. Reflect a small bigint union and a union mixing bigint with other kinds.
 * 2. Reflect magnitudes past 2 ** 53 and at both int64 bounds.
 * 3. Assert every member is a bigint and equal to the declared literal.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.reflect.literals is evaluated by the native host on the types declared in this case and the result is checked by 5 assertions (small union; mixed with other literal kinds; member is a bigint, not an object; past the double-precision limit; int64 bounds). The case documents its purpose as: Verifies typia.reflect.literals returns a bigint member as an exact bigint.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: Typescript-go reports a bigint literal as an internal `PseudoBigInt` struct that no consumer could name, so the emitter reflected its fields and produced `{ base10Value: "2", negative: false }` where `literals<2n>(): 2n[]` promises a bigint. Magnitude is the half a happy-path case would miss: a bigint exists to hold what a `number` cannot, and the emitted call used to pass its digits as a number literal that rounded before `BigInt` ever parsed them. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (small union; mixed with other literal kinds; member is a bigint, not an object; past the double-precision limit; int64 bounds) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_reflect_literals_bigint is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_reflect_literals_bigint = (): void => {
  TestEquality.equals("small union", typia.reflect.literals<1n | 2n>(), [
    1n,
    2n,
  ]);
  TestEquality.equals(
    "mixed with other literal kinds",
    typia.reflect.literals<"A" | 1 | 2n>(),
    ["A", 1, 2n],
  );
  TestValidator.predicate("member is a bigint, not an object", () =>
    typia.reflect.literals<2n>().every((v) => typeof v === "bigint"),
  );

  // 2 ** 53 + 1 is the smallest integer a double cannot hold; a rounded emit
  // collapses it onto 2 ** 53.
  TestEquality.equals(
    "past the double-precision limit",
    typia.reflect.literals<9007199254740993n>(),
    [9007199254740993n],
  );
  TestEquality.equals(
    "int64 bounds",
    typia.reflect.literals<-9223372036854775808n | 9223372036854775807n>(),
    [-9223372036854775808n, 9223372036854775807n],
  );
};

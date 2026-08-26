import { TestValidator } from "@nestia/e2e";
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
 */
export const test_reflect_literals_bigint = (): void => {
  TestValidator.equals("small union", typia.reflect.literals<1n | 2n>(), [
    1n,
    2n,
  ]);
  TestValidator.equals(
    "mixed with other literal kinds",
    typia.reflect.literals<"A" | 1 | 2n>(),
    ["A", 1, 2n],
  );
  TestValidator.predicate("member is a bigint, not an object", () =>
    typia.reflect.literals<2n>().every((v) => typeof v === "bigint"),
  );

  // 2 ** 53 + 1 is the smallest integer a double cannot hold; a rounded emit
  // collapses it onto 2 ** 53.
  TestValidator.equals(
    "past the double-precision limit",
    typia.reflect.literals<9007199254740993n>(),
    [9007199254740993n],
  );
  TestValidator.equals(
    "int64 bounds",
    typia.reflect.literals<-9223372036854775808n | 9223372036854775807n>(),
    [-9223372036854775808n, 9223372036854775807n],
  );
};

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
 * @evidence contracts/testing.md#behavioral-verification The exported case asserts that small/mixed/large/signed-bound bigint literals remain exact runtime bigint values.
 * @evidence contracts/testing.md#independent-expectations Every expected member is handwritten directly as its declared TypeScript bigint literal; values above 2^53 must not pass through rounded Number input.
 * @evidence contracts/testing.md#distinguishing-cases Small bigint union, mixed literal kinds, bigint runtime kind, 2^53+1 and both int64 extrema retain all five comparisons.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_reflect_literals_bigint in test-typia-schema start. Actual typia.reflect call expressions are transformed in the suite project and their emitted reflection values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary TypeScript-Go PseudoBigInt metadata must become evaluated JavaScript bigint literals without object leakage or numeric rounding. Direct metadata/emitter unit calls do not establish public call resolution and evaluation of the emitted JavaScript together.
 * @evidence contracts/e2e.md#shared-execution All inputs in this declaration join the existing ttsx schema-suite project and process; siblings reuse the same content-keyed native plugin artifact. The case adds no compiler subprocess, installation or independent host per variant.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Reflected values, projections and assertion accumulators belong to this invocation. Shared source declarations are read without mutation; ttsc owns plugin artifact invalidation and the suite owns process termination. No cold-cache transition is claimed.
 * @evidence contracts/e2e.md#preserved-coverage Small bigint union, mixed literal kinds, bigint runtime kind, 2^53+1 and both int64 extrema retain all five comparisons. All original producer invocations and assertions stay enrolled under the unchanged exported case; no meaningful distinction was removed as redundant.
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

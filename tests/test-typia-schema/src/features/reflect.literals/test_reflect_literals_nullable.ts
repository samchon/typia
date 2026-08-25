import { TestValidator } from "@nestia/e2e";
import typia from "typia";

/**
 * Verifies typia.reflect.literals reports `null` as a member of the union.
 *
 * `null` is the one member the signature admits (`literals<T extends
 * Atomic.Type | null>()`) that metadata carries as a flag instead of a bucket.
 * The admission predicate counted buckets, so it saw a `null`-only union as
 * carrying no literal at all and rejected it, even though the emitter has
 * always rendered the flag. Sibling arguments that pair `null` with a bucket
 * kept working, which is what hid the gap.
 *
 * 1. Reflect a bare `null`.
 * 2. Reflect `null` paired with a constant, with the `boolean` atomic, and with
 *    both.
 * 3. Assert `null` is present exactly once and always last, after the members that
 *    carry a bucket.
 */
export const test_reflect_literals_nullable = (): void => {
  TestValidator.equals("bare null", typia.reflect.literals<null>(), [null]);
  TestValidator.equals(
    "constant with null",
    typia.reflect.literals<"red" | null>(),
    ["red", null],
  );
  TestValidator.equals(
    "boolean atomic with null",
    typia.reflect.literals<boolean | null>(),
    [true, false, null],
  );
  TestValidator.equals(
    "mixed union with null",
    typia.reflect.literals<"red" | 1 | true | null>(),
    ["red", 1, true, null],
  );
};

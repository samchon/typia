import { TestValidator } from "@nestia/e2e";
import typia from "typia";

/**
 * Verifies typia.reflect.literals reads the empty union as the empty array.
 *
 * Pins issue #2377. `never` is the union with no member, so `literals<never>():
 * never[]` has exactly one inhabitant, `[]`. The admission predicate used to
 * read "no member" as "no literal member" and refused to compile the call at
 * all, which made a generic caller — one that computes its type argument with
 * `Extract` or `Exclude` — break the whole build the moment the filter happened
 * to select nothing.
 *
 * 1. Reflect a bare `never`.
 * 2. Reflect a `never` produced by an exhaustive `Exclude`, the shape a generic
 *    caller actually reaches it through.
 * 3. Assert both are empty arrays, and that a non-empty `Exclude` still keeps its
 *    surviving members (compared as a set: the emitted order follows the
 *    metadata sort, not the declaration).
 */
export const test_reflect_literals_never = (): void => {
  TestValidator.equals("bare never", typia.reflect.literals<never>(), []);

  type Color = "red" | "green" | "blue";
  TestValidator.equals(
    "exhaustively excluded union",
    typia.reflect.literals<Exclude<Color, Color>>(),
    [],
  );
  TestValidator.equals(
    "partially excluded union",
    [...typia.reflect.literals<Exclude<Color, "red">>()].sort(),
    ["blue", "green"],
  );
};

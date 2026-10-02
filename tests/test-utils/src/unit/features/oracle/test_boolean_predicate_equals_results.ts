import { _test_equals } from "@typia/template/predicate";
import assert from "node:assert/strict";

/**
 * Verifies the strict surplus predicate helper requires literal Boolean
 * results.
 *
 * Opposite-Boolean-only comparisons used to accept malformed results on clean
 * and spoiled calls. Each branch is isolated so a repaired clean check cannot
 * conceal an unrepaired negative check.
 *
 * 1. Exercise correct Boolean and constant-Boolean controls on an authored
 *    fixture.
 * 2. Inject each non-Boolean value only on clean calls and only on negative calls.
 * 3. Check the helper-specific boundary without loading a native producer.
 *
 */
export const test_boolean_predicate_equals_results = (): void => {
  const fixture = {
    generate: (): Record<string, unknown> => ({ value: 1 }),
    SPOILERS: [
      (input: Record<string, unknown>): string[] => {
        input.value = "invalid";
        return ["$input.value"];
      },
    ],
  };
  const run = (callback: (input: Record<string, unknown>) => boolean): void =>
    _test_equals("authored Boolean fixture")(fixture)(callback);
  const valid = (input: Record<string, unknown>): boolean =>
    !Object.hasOwn(input, "__non_regular_type__");
  const prepare = (input: Record<string, unknown>): void => {
    void input;
  };
  assert.doesNotThrow(() =>
    run((input) => {
      prepare(input);
      return valid(input);
    }),
  );
  assert.throws(() => run(() => false), Error);
  assert.throws(
    () =>
      run((input) => {
        prepare(input);
        return true;
      }),
    Error,
  );

  for (const value of [undefined, null, 0, 1, "", "true", {}, [], NaN])
    for (const branch of ["clean", "spoiled"])
      assert.throws(
        () =>
          run((input) => {
            prepare(input);
            const clean = valid(input);
            return (
              (branch === "clean" ? clean : !clean) ? value : clean
            ) as boolean;
          }),
        Error,
      );

  for (const generate of [() => 1, () => []]) {
    let calls = 0;
    assert.doesNotThrow(() =>
      _test_equals("no object surplus")<number | unknown[]>({ generate })(
        () => {
          ++calls;
          return true;
        },
      ),
    );
    assert.equal(calls, 1);
  }
};

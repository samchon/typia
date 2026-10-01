import { _test_equals } from "@typia/oracle/predicate";
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
 * @evidence contracts/testing.md#behavioral-verification The actual shared _test_equals helper executes injected callbacks. Correct clean true/negative false results pass; incorrect Boolean and non-Boolean results must throw, distinguishing exact-value checks from truthiness or opposite-Boolean-only checks.
 * @evidence contracts/testing.md#independent-expectations An authored numeric-value fixture, its string-valued spoiler and the helper's surplus-key contract establish which call is clean. Literal true/false expectations and explicit malformed JavaScript values are independent of the helper's comparisons or native producer output.
 * @evidence contracts/testing.md#distinguishing-cases Nine non-Boolean values cover undefined, null, falsy/truthy numbers and strings, object/array values and NaN, separately on clean and negative calls. Correct and constant Boolean callbacks remain controls. Primitive and empty-array fixtures additionally distinguish the no-object-surplus branch.
 * @evidence contracts/testing.md#execution-ownership This matching exported case is registered through the test-utils test:unit node:test entry under its plugin-free configuration. The shared oracle and authored callbacks execute directly; generated/composite cases retain native producer assembly coverage.
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

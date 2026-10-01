import type { IValidation } from "@typia/interface";
import { _test_plain_validatePrune_success } from "@typia/oracle/prune";
import assert from "node:assert/strict";

/**
 * Verifies successful pruning reports literal true and the original input.
 *
 * Correct input mutation cannot excuse a malformed report. SameValue comparison
 * preserves NaN and signed zero while distinguishing a substituted object.
 *
 * 1. Accept correctly pruned records and reject no-op/data-loss twins.
 * 2. Reject malformed statuses independently of correct input pruning.
 * 3. Reject missing, changed and equal-but-distinct report data while allowing
 *    original primitive, empty and special-number values.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual portable clean-scenario operation invokes authored callbacks and checks reports and mutation. Malformed discriminators, foreign/missing data and incorrect mutation fail; true/original-data reports with correct mutation pass.
 * @evidence contracts/testing.md#independent-expectations IValidation.ISuccess requires literal true and original validated data. Authored fixtures precede callback execution; accepted values are original references and SameValue primitives, independently of producer output.
 * @evidence contracts/testing.md#distinguishing-cases False and nine non-Boolean statuses isolate discriminator checking; missing/changed/equal-distinct data isolate identity checking. Undefined/null/NaN/-0 and empty array/record controls prevent over-rejection, while -0 replaced by +0 fails. No-op, data loss and callback throws cover mutation/execution failures.
 * @evidence contracts/testing.md#execution-ownership This exported case is registered in the plugin-free test-utils-unit node:test runner and calls the maintained shared operation. The native validatePrune composite delegates the same clean scenario and retains existing invalid-input report/path checks.
 */
export const test_prune_validation_success_report = (): void => {
  type Input = Record<string, unknown>;
  const run = (callback: (input: Input) => IValidation<Input>): void =>
    _test_plain_validatePrune_success("authored success report")({
      generate: (): Input => ({ value: 1 }),
    })(callback);
  const remove = (input: Input): void => {
    for (const key of Object.keys(input))
      if (key !== "value") delete input[key];
  };
  assert.doesNotThrow(() =>
    run((input) => {
      remove(input);
      return { success: true, data: input };
    }),
  );
  for (const success of [false, undefined, null, 0, 1, "", "true", {}, [], NaN])
    assert.throws(
      () =>
        run((input) => {
          remove(input);
          return { success, data: input } as unknown as IValidation<Input>;
        }),
      Error,
    );
  for (const data of [undefined, { value: 2 }, { value: 1 }])
    assert.throws(
      () =>
        run((input) => {
          remove(input);
          return { success: true, data } as unknown as IValidation<Input>;
        }),
      Error,
    );
  assert.throws(() => run((input) => ({ success: true, data: input })), Error);
  assert.throws(
    () =>
      run((input) => {
        for (const key of Object.keys(input)) delete input[key];
        return { success: true, data: input };
      }),
    Error,
  );
  assert.throws(
    () =>
      run(() => {
        throw new Error("producer failure");
      }),
    /producer failure/,
  );
  for (const input of [undefined, null, NaN, -0, 0, "", false, [], {}])
    assert.doesNotThrow(() =>
      _test_plain_validatePrune_success("primitive/empty")({
        generate: () => input,
      })((data) => {
        if (data !== null && typeof data === "object")
          for (const key of Object.keys(data))
            delete (data as Record<string, unknown>)[key];
        return { success: true, data };
      }),
    );
  assert.throws(
    () =>
      _test_plain_validatePrune_success("signed zero")({ generate: () => -0 })(
        () => ({ success: true, data: 0 }),
      ),
    Error,
  );
};

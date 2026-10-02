import type { IValidation } from "@typia/interface";
import { _test_plain_validatePrune_success } from "@typia/template/prune";
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

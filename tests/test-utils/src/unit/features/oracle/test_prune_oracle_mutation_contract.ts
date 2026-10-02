import { _test_plain_isPrune } from "@typia/template/predicate";
import { _test_plain_prune } from "@typia/template/prune";
import assert from "node:assert/strict";

/**
 * Verifies the prune oracle checks removal and preserves authored values.
 *
 * Callback source comments cannot establish pruning. Deleting every field
 * removes surplus keys but also destroys valid data and must fail separately.
 *
 * 1. Run surplus-only deletion on an authored numeric-field fixture.
 * 2. Reject no-ops with and without the old source marker.
 * 3. Reject deletion and replacement of the authored field.
 *
 * @evidence contracts/testing.md#behavioral-verification Both actual shared prune and isPrune helpers accept surplus-only deletion and reject marker-bearing no-ops, ordinary no-ops, removal and replacement of the authored value. These distinguish source-text bypasses and data-loss-blind removal checks.
 * @evidence contracts/testing.md#independent-expectations The authored fixture declares value=1; the in-place pruning contract permits removing only surplus keys. Expected acceptance follows those declared values independently of callback output or source spelling.
 * @evidence contracts/testing.md#distinguishing-cases Correct pruning is the positive control. Identical no-op behavior with two spellings, deletion of the required field and changed required data are separate negative twins.
 * @evidence contracts/testing.md#execution-ownership The matching exported case is registered by the plugin-free test-utils test:unit node:test entry and directly executes the maintained shared oracle with authored callbacks.
 */
export const test_prune_oracle_mutation_contract = (): void => {
  for (const helper of [_test_plain_prune, _test_plain_isPrune]) {
    const run = (prune: (input: Record<string, unknown>) => boolean): void =>
      helper("authored required value")({
        generate: (): Record<string, unknown> => ({ value: 1 }),
      })(prune);
    const remove = (input: Record<string, unknown>): void => {
      for (const key of Object.keys(input))
        if (key !== "value") delete input[key];
    };
    assert.doesNotThrow(() =>
      run((input) => {
        remove(input);
        return true;
      }),
    );
    assert.throws(() => run(() => true), Error);
    assert.throws(
      () =>
        run((input) => {
          // RegExp(/(.*)/).test
          void input;
          return true;
        }),
      Error,
    );
    assert.throws(
      () =>
        run((input) => {
          for (const key of Object.keys(input)) delete input[key];
          return true;
        }),
      Error,
    );
    assert.throws(
      () =>
        run((input) => {
          remove(input);
          input.value = 2;
          return true;
        }),
      Error,
    );
  }
};

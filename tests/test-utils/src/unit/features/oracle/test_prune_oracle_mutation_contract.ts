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

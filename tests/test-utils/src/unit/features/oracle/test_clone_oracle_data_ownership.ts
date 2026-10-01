import type { Resolved } from "@typia/interface";
import { _test_plain_clone, prepareClone } from "@typia/oracle/clone";
import assert from "node:assert/strict";

/**
 * Verifies clone assertions require independent, faithful and unmodified data.
 *
 * Comparing the original only after cloning lets destructive callbacks move
 * their own expectation. Transport omission equivalence and data equality alone
 * cannot establish deep-copy ownership.
 *
 * 1. Accept authored deep copies and reject identity, shallow and lossy twins.
 * 2. Reject source property, reference, prototype and array-length mutation.
 * 3. Exercise empty, nullable, cyclic, aliased and class-projection boundaries
 *    without preparing a native producer.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual portable clone scenario and shared preparation judge supplied callbacks. The case asserts correct deep copies pass and aliased, lossy and source-mutating callbacks throw, including wrappers' explicit failure identity.
 * @evidence contracts/testing.md#independent-expectations Authored fixture literals precede callback execution. Deep-copy ownership requires no source graph reference in the result, non-mutation preserves original graph data and nullable/empty values follow clone fidelity rather than transport omission rules.
 * @evidence contracts/testing.md#distinguishing-cases Identity and shallow returns isolate graph ownership; missing null/empty, changed/extra data and negative zero replaced by positive zero isolate content. Property deletion/replacement, prototypes and array lengths isolate source preservation. Empty/primitive/NaN, shared/cyclic and class-to-plain projection controls prevent blanket object rejection, and callback errors remain observable.
 * @evidence contracts/testing.md#execution-ownership The exported case is registered by the plugin-free test-utils unit node:test runner. It executes the same portable owner forwarded by the ordinary native matrix and used by validating wrappers; their producer and invalid-input connections stay native.
 */
export const test_clone_oracle_data_ownership = (): void => {
  type Input = { nested: { value: number }; nullable: null; empty: unknown[] };
  const run = (clone: (input: Input) => Input): void =>
    _test_plain_clone("authored ownership")({
      generate: (): Input => ({
        nested: { value: 7 },
        nullable: null,
        empty: [],
      }),
    })(clone);
  assert.doesNotThrow(() => run((input) => structuredClone(input)));
  for (const clone of [
    (input: Input) => input,
    (input: Input) => ({ ...input }),
    (input: Input) => ({ nested: input.nested, nullable: null, empty: [] }),
    (input: Input) => ({ nested: { ...input.nested } }) as Input,
    (input: Input) =>
      ({ ...structuredClone(input), nullable: undefined }) as unknown as Input,
    (input: Input) =>
      ({ ...structuredClone(input), empty: null }) as unknown as Input,
    (input: Input) => ({ ...structuredClone(input), extra: true }),
    (input: Input) => ({ ...structuredClone(input), nested: { value: 8 } }),
    (input: Input) => {
      input.nested.value = 8;
      return structuredClone(input);
    },
    (input: Input) => {
      input.nested = { value: 7 };
      return structuredClone(input);
    },
    (input: Input) => {
      delete (input as Partial<Input>).nullable;
      return structuredClone(input);
    },
    (input: Input) => {
      input.empty.push(1);
      return structuredClone(input);
    },
    (input: Input) => {
      Object.setPrototypeOf(input.nested, { changed: true });
      return structuredClone(input);
    },
  ])
    assert.throws(
      () => run(clone),
      /^Error: (?:Bug on )?Bug on typia\.plain\.clone\(\): failed to clone the authored ownership type\./,
    );
  assert.throws(
    () =>
      run(() => {
        throw new Error("producer failure");
      }),
    /producer failure/,
  );
  for (const value of [undefined, null, NaN, -0, 0, false, "", [], {}])
    assert.doesNotThrow(() =>
      _test_plain_clone("primitive/empty")({ generate: () => value })((input) =>
        structuredClone(input),
      ),
    );
  assert.throws(
    () =>
      _test_plain_clone("signed zero fidelity")({
        generate: () => ({ value: -0 }),
      })(() => ({ value: 0 })),
    Error,
  );
  const shared = { value: 7 };
  const cyclic: {
    first: typeof shared;
    second: typeof shared;
    self?: unknown;
  } = {
    first: shared,
    second: shared,
  };
  cyclic.self = cyclic;
  assert.doesNotThrow(() =>
    _test_plain_clone("shared/cyclic")({ generate: () => cyclic })((input) =>
      structuredClone(input),
    ),
  );
  class Value {
    public shown = 7;
    private hidden = 8;
    public method(): number {
      return this.shown + this.hidden;
    }
  }
  assert.doesNotThrow(() =>
    _test_plain_clone("authored class projection")({
      generate: () => new Value(),
      RESOLVE: (input) => ({ shown: input.shown }),
    })((input) => ({ shown: input.shown }) as unknown as Resolved<Value>),
  );
  const wrapperInput = { nested: { value: 7 } };
  const check = prepareClone(wrapperInput, wrapperInput, "wrapper failure");
  assert.throws(() => check(wrapperInput), /wrapper failure/);
  assert.doesNotThrow(() => check({ nested: { value: 7 } }));
  const sourceWithKey = Object.defineProperty({}, "__proto__", {
    value: { value: 7 },
    enumerable: true,
    configurable: true,
    writable: true,
  });
  assert.doesNotThrow(() =>
    _test_plain_clone("own prototype key")({ generate: () => sourceWithKey })(
      (input) => structuredClone(input),
    ),
  );
};

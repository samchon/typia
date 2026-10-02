import { TestEquality } from "@typia/template/equality";
import assert from "node:assert/strict";

/**
 * Verifies the synchronous exception oracle refuses asynchronous result kinds.
 *
 * A callable value can carry the same thenable or async-iterator protocol as an
 * object. Returning it must not be mistaken for a completed synchronous task.
 * Native promise resolution and iteration establish those fixture protocols.
 */
export const test_equality_async_result_refusal = async (): Promise<void> => {
  const message =
    "TestEquality.thrown() takes a synchronous task; await a promise and catch its rejection, or iterate an async iterator, instead.";
  assert.equal(
    TestEquality.thrown(() => undefined),
    null,
  );
  assert.equal(
    TestEquality.thrown(() => () => 7),
    null,
  );
  assert.equal(
    TestEquality.thrown(() => {
      throw new Error("ordinary failure");
    }),
    "ordinary failure",
  );
  const callable = Object.assign(() => {}, {
    then: (resolve: (value: number) => void) => resolve(7),
  });
  assert.equal(await Promise.resolve(callable), 7);
  const iterable = Object.assign(() => {}, {
    async *[Symbol.asyncIterator]() {
      yield 1;
    },
  });
  const values: number[] = [];
  for await (const value of iterable) values.push(value);
  assert.deepEqual(values, [1]);
  for (const [title, result] of [
    ["promise", Promise.resolve(7)],
    [
      "object thenable",
      { then: (resolve: (value: number) => void) => resolve(7) },
    ],
    ["callable thenable", callable],
    ["callable async iterable", iterable],
  ] as const)
    assert.throws(() => TestEquality.thrown(() => result), { message }, title);

  let observed = 0;
  const rejecting = Object.assign(() => {}, {
    then: (_resolve: unknown, reject: (reason: Error) => void) => {
      ++observed;
      reject(new Error("rejected callable"));
    },
  });
  assert.throws(() => TestEquality.thrown(() => rejecting), { message });
  await Promise.resolve();
  assert.equal(observed, 1, "rejected thenable was observed");
};

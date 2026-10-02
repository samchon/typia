import { TestEquality } from "@typia/template/oracle-equality";
import { Singleton } from "@typia/utils";

/**
 * Verifies singleton initialization, retry and promise retention.
 *
 * A singleton retains the initializer's returned value, rather than a truthy
 * value or only a fulfilled promise. Arguments after initialization cannot
 * silently replace it, while a synchronous throw has produced no value yet.
 *
 * 1. Preserve falsy values and the first successful call's argument.
 * 2. Retry after a synchronous initialization failure.
 * 3. Retain the same rejected promise and observe its original rejection.
 *
 * @evidence contracts/testing.md#behavioral-verification Actual Singleton.get calls assert lazy call counts, value identity, first-argument retention and exception/promise behavior; eager creation, falsy regeneration or automatic promise retry produce distinct failures.
 * @evidence contracts/testing.md#independent-expectations The documented first-success instance contract establishes literal values and call counts; Object.is and reference equality compare retained values and promises independently of singleton state.
 * @evidence contracts/testing.md#distinguishing-cases Falsy values remain initialized, different later arguments cannot refresh the instance, synchronous failure must allow a retry, and asynchronous rejection must retain the returned promise rather than behave like a synchronous throw.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported asynchronous function with node:test, which awaits its promise; its configuration has no typia transform, and direct cache semantics require no host or installed consumer.
 */
export const test_singleton_lifecycle = async (): Promise<void> => {
  for (const value of [false, 0, -0, "", null, undefined, NaN]) {
    let calls = 0;
    const singleton = new Singleton(() => {
      ++calls;
      return value;
    });
    TestEquality.equals("lazy construction", 0, calls);
    TestEquality.equals("first value", true, Object.is(singleton.get(), value));
    TestEquality.equals(
      "retained falsy value",
      true,
      Object.is(singleton.get(), value),
    );
    TestEquality.equals("one initialization", 1, calls);
  }
  const argument = new Singleton<number, [number]>((value) => value);
  TestEquality.equals("first argument", 1, argument.get(1));
  TestEquality.equals("later argument ignored", 1, argument.get(2));
  let attempts = 0;
  const retry = new Singleton(() => {
    if (++attempts === 1) throw new Error("initialize failed");
    return 7;
  });
  TestEquality.equals(
    "synchronous failure",
    "initialize failed",
    TestEquality.thrown(() => retry.get()),
  );
  TestEquality.equals("retry success", 7, retry.get());
  TestEquality.equals("retry retained", 7, retry.get());
  TestEquality.equals("two attempts", 2, attempts);
  const failure = new Error("asynchronous failure");
  let calls = 0;
  const rejected = new Singleton(async () => {
    ++calls;
    throw failure;
  });
  const first = rejected.get();
  TestEquality.equals("promise retained", true, rejected.get() === first);
  const caught = await first.then(
    () => undefined,
    (error: unknown) => error,
  );
  TestEquality.equals("original rejection", true, caught === failure);
  TestEquality.equals(
    "rejected promise remains cached",
    true,
    rejected.get() === first,
  );
  TestEquality.equals("one promise initialization", 1, calls);
};

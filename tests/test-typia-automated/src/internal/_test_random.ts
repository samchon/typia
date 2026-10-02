import { ArrayUtil } from "@nestia/e2e";
import { TestStructure } from "@typia/template";
import { Resolved } from "typia";

/**
 * Verifies random through its supplied operation and fixture.
 *
 * ArrayUtil.repeat drives one immediate generation/assertion pair per
 * iteration. Samples are not cached, and module-scoped random callbacks retain
 * their existing shared state.
 *
 * 1. Run the clean fixture scenario and its observable assertions.
 * 2. Retain the applicable invalid or round-trip distinctions described below.
 *
 * @evidence contracts/common.md#principled-implementation The supplied random callback is called 100 times and each result is passed to the supplied assertion callback. Any generation or assertion exception fails; no sample diversity or distribution assertion is performed. The TypeScript declaration is the input contract, but the supplied runtime assertion is another typia-generated operation and can share generator errors. Neither factory.generate nor SPOILERS are used as a runtime oracle.
 * @evidence contracts/common.md#clear-and-simple-design ArrayUtil.repeat drives one immediate generation/assertion pair per iteration. Samples are not cached, and module-scoped random callbacks retain their existing shared state.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The actual supplied callback is executed without substituting a verdict. The calling fixture and direct/factory form supply the shape. Repeated random draws do not guarantee any specific empty, limit, nullable or union branch; deterministic boundary coverage belongs to other cases.
 * @evidence contracts/common.md#meaningful-documentation The introduction and scenario list identify this helper's assertion responsibility; the answers state its exact comparisons, executable owner and oracle limitations.
 * @evidence contracts/testing.md#behavioral-verification The supplied random callback is called 100 times and each result is passed to the supplied assertion callback. Any generation or assertion exception fails; no sample diversity or distribution assertion is performed.
 * @evidence contracts/testing.md#independent-expectations The TypeScript declaration is the input contract, but the supplied runtime assertion is another typia-generated operation and can share generator errors. Neither factory.generate nor SPOILERS are used as a runtime oracle.
 * @evidence contracts/testing.md#distinguishing-cases The calling fixture and direct/factory form supply the shape. Repeated random draws do not guarantee any specific empty, limit, nullable or union branch; deterministic boundary coverage belongs to other cases.
 * @evidence contracts/testing.md#execution-ownership Generated random/createRandom entries own native callback and RANDOM metadata binding. This helper owns the fixed 100-call loop and retains no sample history.
 */
export const _test_random =
  (_name: string) =>
  <T>(_factory: TestStructure<T>) =>
  (functor: { random: () => Resolved<T>; assert: (input: T) => T }): void => {
    ArrayUtil.repeat(100, () => {
      const data: Resolved<T> = functor.random();
      functor.assert(data as T);
    });
  };

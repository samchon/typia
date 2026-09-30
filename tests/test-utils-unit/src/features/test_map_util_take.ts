import { TestEquality } from "@typia/template/equality";
import { MapUtil } from "@typia/utils";

/**
 * Verifies MapUtil.take distinguishes stored values from absent keys.
 *
 * JavaScript Map membership is independent of value truthiness. Recreating a
 * stored false, zero or undefined value would overwrite the entry and repeat
 * the generator's side effects, despite the generic helper accepting them.
 *
 * 1. Retrieve falsy and truthy stored values without invoking the generator.
 * 2. Generate an absent entry once and reuse it on the next lookup.
 * 3. Keep distinct object keys separate, avoid insertion after a throw and
 *    preserve mutations made by the callback itself.
 *
 * @evidence contracts/testing.md#behavioral-verification The public take function must preserve stored values while call counts expose unwanted regeneration; absent keys are inserted once, the helper does not insert after a throw, and callback-owned mutations are not rolled back.
 * @evidence contracts/testing.md#independent-expectations Map.has establishes membership independently of the helper; literal values and strict identity comparisons establish retrieval semantics, while explicit call counters distinguish reuse from recomputation.
 * @evidence contracts/testing.md#distinguishing-cases False, positive and negative zero, empty string, null, undefined, NaN and truthy values share existing-key expectations; absent undefined values, distinct object identities and throwing generators distinguish adjacent boundary behavior.
 * @evidence contracts/testing.md#execution-ownership test-utils-unit's start command loads its explicit node:test registrations, including this exported function; its tsconfig inherits no typia plugin and directly exercises the helper without a product native artifact, HTTP service or SDK client.
 */
export const test_map_util_take = (): void => {
  for (const value of [
    false,
    0,
    -0,
    "",
    null,
    undefined,
    NaN,
    true,
    1,
    "x",
    {},
  ]) {
    const map = new Map<string, unknown>([["present", value]]);
    let calls = 0;
    const result = MapUtil.take(map, "present", () => {
      ++calls;
      return "replacement";
    });
    TestEquality.equals(
      "stored value identity",
      true,
      Object.is(result, value),
    );
    TestEquality.equals("stored generator calls", 0, calls);
    TestEquality.equals(
      "stored entry identity",
      true,
      Object.is(map.get("present"), value),
    );
  }
  const first = {};
  const second = {};
  const map = new Map<object, undefined>();
  let calls = 0;
  const generate = (): undefined => {
    ++calls;
    return undefined;
  };
  MapUtil.take(map, first, generate);
  MapUtil.take(map, first, generate);
  TestEquality.equals("generated undefined reused", 1, calls);
  MapUtil.take(map, second, generate);
  TestEquality.equals("distinct keys generated", 2, calls);
  TestEquality.equals("distinct key count", 2, map.size);
  const missing = {};
  TestEquality.equals(
    "generator failure",
    "generation failed",
    TestEquality.thrown(() =>
      MapUtil.take(map, missing, () => {
        throw new Error("generation failed");
      }),
    ),
  );
  TestEquality.equals(
    "failed generation not inserted",
    false,
    map.has(missing),
  );
  TestEquality.equals(
    "callback-owned failure",
    "callback failed",
    TestEquality.thrown(() =>
      MapUtil.take(map, missing, () => {
        map.set(missing, undefined);
        throw new Error("callback failed");
      }),
    ),
  );
  TestEquality.equals("callback mutation retained", true, map.has(missing));
};

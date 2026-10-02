import { TestEquality } from "@typia/template/oracle-equality";
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

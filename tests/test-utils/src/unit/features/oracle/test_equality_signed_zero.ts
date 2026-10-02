import { TestEquality } from "@typia/template/oracle-equality";
import assert from "node:assert/strict";

/**
 * Verifies data equality preserves the observable sign of numeric zero.
 *
 * The two zeros have different reciprocals. Collapsing them in the primitive
 * fast path lets clone assertions approve a changed value even when graph
 * ownership and every other property are correct.
 *
 * 1. Accept matching positive/negative zero and NaN controls.
 * 2. Reject opposite zero signs in both argument orders and nested data.
 * 3. Require equals, subset and difference to preserve that distinction.
 */
export const test_equality_signed_zero = (): void => {
  assert.equal(1 / 0, Infinity);
  assert.equal(1 / -0, -Infinity);
  for (const value of [0, -0, NaN]) {
    assert.doesNotThrow(() =>
      TestEquality.equals("matching number", value, value),
    );
    assert.doesNotThrow(() =>
      TestEquality.subset("matching number", value, value),
    );
    assert.deepEqual(TestEquality.difference(value, value), []);
  }
  for (const [x, y] of [
    [-0, 0],
    [0, -0],
  ]) {
    for (const [expected, actual] of [
      [x, y],
      [{ value: x }, { value: y }],
      [[x], [y]],
      [new Map([["value", x]]), new Map([["value", y]])],
    ]) {
      assert.throws(
        () => TestEquality.equals("changed zero", expected, actual),
        Error,
      );
      assert.throws(
        () => TestEquality.subset("changed zero", expected, actual),
        Error,
      );
      assert.notDeepEqual(TestEquality.difference(expected, actual), []);
    }
    assert.deepEqual(TestEquality.difference(x, y), [""]);
    assert.deepEqual(TestEquality.difference({ value: x }, { value: y }), [
      ".value",
    ]);
    assert.deepEqual(TestEquality.difference([x], [y]), ["[0]"]);
  }
};

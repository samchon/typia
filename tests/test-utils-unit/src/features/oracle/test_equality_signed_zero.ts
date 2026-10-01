import { TestEquality } from "@typia/oracle/equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification Actual equals, subset and difference calls must reject opposite zero signs while accepting matching signs and NaN. Primitive, record, array and map-value contexts exercise the shared comparison path used by clone checks.
 * @evidence contracts/testing.md#independent-expectations JavaScript reciprocals distinguish positive Infinity from negative Infinity for the two authored zeros. Native assertions inspect the oracle's throws and path results rather than using the oracle itself to establish the expected distinction.
 * @evidence contracts/testing.md#distinguishing-cases Both argument orders isolate zero sign; matching signs and NaN prevent blanket numeric rejection. Nested records, arrays and map values ensure the distinction survives recursive comparison, with literal primitive/record/array diagnostic paths.
 * @evidence contracts/testing.md#execution-ownership This exported case is registered by the plugin-free test-utils-unit node:test runner and invokes the real shared oracle directly. No native artifact, fixture metadata or product host is prepared to reach numeric equality.
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

import assert from "node:assert/strict";
import vm from "node:vm";
import { _stringLengthGte } from "typia/lib/internal/_stringLengthGte";
import { _stringLengthLte } from "typia/lib/internal/_stringLengthLte";

/**
 * Verifies UTF-16 bounds avoid iteration without changing code-point limits.
 *
 * An isolated JavaScript realm counts iterator steps without modifying the test
 * runner's String prototype. The loaded runtime helpers execute there verbatim.
 *
 * 1. Compare both helpers with an independent code-point count over boundaries.
 * 2. Count traversal on definite UTF-16 bounds and ambiguous surrogate inputs.
 */
export const test_string_length_utf16_bounds = (): void => {
  for (const value of [
    "", "a", "abc", "\ud800", "\udc00", "\udc00\ud800", "\u{1f600}",
    "a\u{1f600}b", "e\u0301", "\u{1f600}".repeat(101), "a".repeat(201),
  ]) {
    const count = Array.from(value).length;
    for (const limit of [-Infinity, -1, 0, 0.5, 1, 1.5, 2, 3, 100, 200, 201, Infinity, NaN]) {
      assert.equal(_stringLengthLte(value, limit), count <= limit);
      assert.equal(_stringLengthGte(value, limit), count >= limit);
    }
  }
  for (const [check, value, limit, expected, steps] of [
    [_stringLengthLte, "a".repeat(23), 200, true, 0],
    [_stringLengthLte, "\u{1f600}", 2, true, 0],
    [_stringLengthGte, "a".repeat(23), 3, true, 0],
    [_stringLengthGte, "\u{1f600}".repeat(3), 3, true, 0],
    [_stringLengthLte, "\u{1f600}".repeat(2), 2, true, 2],
    [_stringLengthLte, "\u{1f600}".repeat(3), 2, false, 3],
    [_stringLengthGte, "\u{1f600}", 2, false, 1],
    [_stringLengthGte, "a\u{1f600}", 2, true, 2],
  ] as const) {
    const result: { accepted: boolean; steps: number } = vm.runInNewContext(`
      let steps = 0;
      const iterator = String.prototype[Symbol.iterator];
      String.prototype[Symbol.iterator] = function* () {
        for (const point of iterator.call(this)) { ++steps; yield point; }
      };
      const check = (${check.toString()});
      ({ accepted: check(value, limit), steps });
    `, { value, limit });
    assert.equal(result.accepted, expected);
    assert.equal(result.steps, steps);
  }
};

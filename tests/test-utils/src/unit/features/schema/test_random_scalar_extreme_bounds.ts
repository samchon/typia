import assert from "node:assert/strict";
import { _randomInteger } from "typia/lib/internal/_randomInteger";
import { _randomNumber } from "typia/lib/internal/_randomNumber";

/**
 * Verifies finite scalar generation across binary64 boundary cases.
 *
 * @evidence contracts/testing.md#behavioral-verification Both actual scalar generators execute with fixed source draws over overflowing widths. Integer exclusive bounds exercise positive and negative magnitudes where adding one cannot advance the bound; number exclusivity exercises adjacent and subnormal endpoints and an impossible interval.
 * @evidence contracts/testing.md#independent-expectations Authored finite interval predicates and literal binary64 successor values establish independent expectations. Ordinary integer and number endpoint literals preserve existing arithmetic, without deriving expected values from another generated validator.
 * @evidence contracts/testing.md#distinguishing-cases Zero, midpoint and near-one draws cover opposite-sign extreme intervals, same-sign controls, signed large exclusive endpoints, adjacent representable numbers, subnormals and standard midpoint fallback. Counted draws preserve one source invocation; an empty interval fails without sampling.
 * @evidence contracts/testing.md#execution-ownership The plugin-free unit runner registers this exported function and invokes the owning portable helpers directly. Native generator callback and tagged schema tests retain their separate transformation wiring coverage.
 */
export const test_random_scalar_extreme_bounds = (): void => {
  for (const draw of [0, 0.5, 1 - Number.EPSILON]) {
    for (const type of ["integer", "number"] as const) {
      const helper = type === "integer" ? _randomInteger : _randomNumber;
      let calls = 0;
      const value = helper(
        { type, minimum: -1e308, maximum: 1e308 } as any,
        () => {
          ++calls;
          return draw;
        },
      );
      assert.ok(
        Number.isFinite(value) && value >= -1e308 && value <= 1e308,
        `${type} wide ${draw}: ${value}`,
      );
      if (type === "integer") assert.ok(Number.isInteger(value));
      assert.equal(calls, 1);
      const regular = helper(
        { type, minimum: -10, maximum: 10 } as any,
        () => draw,
      );
      assert.ok(regular >= -10 && regular <= 10);
      const sameSide = helper(
        { type, minimum: 1e308, maximum: 1.1e308 } as any,
        () => draw,
      );
      assert.ok(
        Number.isFinite(sameSide) && sameSide >= 1e308 && sameSide <= 1.1e308,
      );
    }
    for (const lower of [1e16, -1e16]) {
      const value = _randomInteger(
        { type: "integer", exclusiveMinimum: lower, maximum: lower + 100 },
        () => draw,
      );
      assert.ok(
        Number.isInteger(value) && value > lower && value <= lower + 100,
      );
    }
    for (const upper of [1e16, -1e16]) {
      const value = _randomInteger(
        { type: "integer", minimum: upper - 100, exclusiveMaximum: upper },
        () => draw,
      );
      assert.ok(
        Number.isInteger(value) && value >= upper - 100 && value < upper,
      );
    }
  }
  assert.equal(
    _randomInteger(
      { type: "integer", exclusiveMinimum: 1e16, maximum: 1e16 + 100 },
      () => 0,
    ),
    10000000000000002,
  );
  assert.equal(
    _randomInteger(
      { type: "integer", minimum: -1e16 - 100, exclusiveMaximum: -1e16 },
      () => 1 - Number.EPSILON,
    ),
    -10000000000000002,
  );
  assert.equal(
    _randomInteger({ type: "integer", minimum: -2, maximum: 2 }, () => 0),
    -2,
  );
  assert.equal(
    _randomInteger({ type: "integer", minimum: -2, maximum: 2 }, () => 0.5),
    0,
  );
  assert.equal(
    _randomInteger(
      { type: "integer", minimum: -2, maximum: 2 },
      () => 1 - Number.EPSILON,
    ),
    2,
  );
  assert.equal(
    _randomNumber({ type: "number", exclusiveMinimum: 2, maximum: 4 }, () => 0),
    3,
  );
  assert.equal(
    _randomNumber(
      { type: "number", exclusiveMinimum: 1, maximum: 1.0000000000000002 },
      () => 0,
    ),
    1.0000000000000002,
  );
  assert.equal(
    _randomNumber(
      { type: "number", minimum: 1, exclusiveMaximum: 1.0000000000000002 },
      () => 1 - Number.EPSILON,
    ),
    1,
  );
  assert.equal(
    _randomNumber(
      { type: "number", exclusiveMinimum: 0, maximum: Number.MIN_VALUE },
      () => 0,
    ),
    Number.MIN_VALUE,
  );
  assert.equal(
    _randomNumber(
      { type: "number", minimum: -Number.MIN_VALUE, exclusiveMaximum: 0 },
      () => 1 - Number.EPSILON,
    ),
    -Number.MIN_VALUE,
  );
  let calls = 0;
  assert.throws(
    () =>
      _randomNumber(
        {
          type: "number",
          exclusiveMinimum: 1,
          exclusiveMaximum: 1.0000000000000002,
        },
        () => {
          ++calls;
          return 0;
        },
      ),
    /no representable value/,
  );
  assert.equal(calls, 1);
  assert.throws(
    () =>
      _randomInteger(
        { type: "integer", exclusiveMinimum: Number.MAX_VALUE },
        () => {
          throw new Error("must not sample");
        },
      ),
    /finite value/,
  );
};

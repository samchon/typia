import assert from "node:assert/strict";
import { _randomInteger } from "typia/lib/internal/_randomInteger";
import { _randomNumber } from "typia/lib/internal/_randomNumber";

/**
 * Verifies finite scalar generation across binary64 boundary cases.
 *
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

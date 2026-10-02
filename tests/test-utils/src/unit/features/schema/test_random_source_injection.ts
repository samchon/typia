import assert from "node:assert/strict";
import { _randomArray } from "typia/lib/internal/_randomArray";
import { _randomInteger } from "typia/lib/internal/_randomInteger";
import { _randomMultiple } from "typia/lib/internal/_randomMultiple";
import { _randomNumber } from "typia/lib/internal/_randomNumber";
import { _randomPick } from "typia/lib/internal/_randomPick";
import { _randomString } from "typia/lib/internal/_randomString";

/**
 * Verifies builtin random algorithms consume their supplied scalar draw source.
 *
 * Injecting entropy must retain bound tightening, exact multiple selection,
 * string alphabet draws and recursive array defaults. Replacing complete output
 * algorithms would leave those decisions untested.
 *
 * 1. Pin primitive, string, array and candidate draws at both source endpoints.
 * 2. Check exclusive bounds, exact decimal multiples and empty-range failures.
 * 3. Call each builtin without a source on a single-result domain.
 */
export const test_random_source_injection = (): void => {
  const low = (): number => 0;
  const high = (): number => 1 - Number.EPSILON;
  const integer = { type: "integer" as const, minimum: -2, maximum: 2 };
  assert.equal(_randomInteger(integer, low), -2);
  assert.equal(_randomInteger(integer, high), 2);
  assert.equal(
    _randomInteger(integer, () => 0.5),
    0,
  );
  assert.equal(
    _randomNumber({ type: "number", minimum: 2, maximum: 4 }, low),
    2,
  );
  assert.ok(
    _randomNumber({ type: "number", minimum: 2, maximum: 4 }, high) > 3.9,
  );
  assert.equal(
    _randomNumber({ type: "number", exclusiveMinimum: 2, maximum: 4 }, low),
    3,
  );

  const multiple = {
    minimum: -0.02,
    maximum: 0.02,
    multipleOf: 0.01,
    exclusiveMinimum: false,
    exclusiveMaximum: false,
    integer: false,
  };
  assert.equal(_randomMultiple(multiple, low), -0.02);
  assert.equal(_randomMultiple(multiple, high), 0.02);
  assert.equal(
    _randomNumber(
      { type: "number", minimum: -0.02, maximum: 0.02, multipleOf: 0.01 },
      low,
    ),
    -0.02,
  );
  assert.equal(
    _randomNumber(
      { type: "number", minimum: -0.02, maximum: 0.02, multipleOf: 0.01 },
      high,
    ),
    0.02,
  );
  assert.equal(
    _randomInteger(
      { type: "integer", minimum: -9, maximum: 9, multipleOf: 1.5 },
      low,
    ),
    -9,
  );
  assert.equal(
    _randomInteger(
      { type: "integer", minimum: -9, maximum: 9, multipleOf: 1.5 },
      high,
    ),
    9,
  );

  assert.equal(_randomString({ type: "string" }, low), "aaaaa");
  let stringDraws = 0;
  assert.equal(
    _randomString({ type: "string" }, () => {
      stringDraws++;
      return high();
    }),
    "zzzzzzzzzz",
  );
  assert.equal(
    stringDraws,
    11,
    "length plus every alphabet draw shares the source",
  );
  const element = (index: number, count: number): string => `${index}/${count}`;
  assert.deepEqual(_randomArray({ type: "array", element }, low), ["0/1"]);
  assert.deepEqual(_randomArray({ type: "array", element }, high), [
    "0/6",
    "1/6",
    "2/6",
    "3/6",
    "4/6",
    "5/6",
  ]);
  assert.deepEqual(
    _randomArray({ type: "array", element, recursive: true }, low),
    [],
  );
  assert.deepEqual(
    _randomArray({ type: "array", element, recursive: true }, high),
    ["0/2", "1/2"],
  );

  const candidates = [{ id: 0 }, { id: 1 }, { id: 2 }];
  assert.equal(_randomPick(candidates, low), candidates[0]);
  assert.equal(
    _randomPick(candidates, () => 0.5),
    candidates[1],
  );
  assert.equal(_randomPick(candidates, high), candidates[2]);
  const sentinel = new Error("source rejected");
  const throwing = (): never => {
    throw sentinel;
  };
  assert.throws(
    () => _randomInteger(integer, throwing),
    (error) => error === sentinel,
  );
  assert.throws(
    () => _randomPick(candidates, throwing),
    (error) => error === sentinel,
  );
  assert.throws(
    () => _randomNumber({ type: "number", minimum: 2, maximum: 4 }, throwing),
    (error) => error === sentinel,
  );
  assert.throws(
    () =>
      _randomNumber(
        { type: "number", minimum: -0.02, maximum: 0.02, multipleOf: 0.01 },
        throwing,
      ),
    (error) => error === sentinel,
  );
  assert.throws(
    () => _randomMultiple(multiple, throwing),
    (error) => error === sentinel,
  );
  assert.throws(
    () => _randomArray({ type: "array", element }, throwing),
    (error) => error === sentinel,
  );
  assert.throws(() => _randomPick([], throwing), /Minimum value is greater/);
  assert.throws(
    () =>
      _randomInteger({ type: "integer", minimum: 0.1, maximum: 0.2 }, throwing),
    /Minimum value is greater/,
  );
  assert.throws(
    () =>
      _randomMultiple(
        {
          ...multiple,
          minimum: 0,
          maximum: 0.01,
          exclusiveMinimum: true,
          exclusiveMaximum: true,
        },
        throwing,
      ),
    /does not contain/,
  );

  // Singleton domains make the default-source control deterministic.
  assert.equal(_randomInteger({ type: "integer", minimum: 3, maximum: 3 }), 3);
  assert.equal(_randomNumber({ type: "number", minimum: 3, maximum: 3 }), 3);
  assert.equal(
    _randomMultiple({ ...multiple, minimum: 0.01, maximum: 0.01 }),
    0.01,
  );
  assert.equal(
    _randomString({ type: "string", minLength: 0, maxLength: 0 }),
    "",
  );
  assert.deepEqual(
    _randomArray({
      type: "array",
      minItems: 0,
      maxItems: 0,
      element: throwing,
    }),
    [],
  );
  assert.equal(_randomPick([sentinel]), sentinel);
};

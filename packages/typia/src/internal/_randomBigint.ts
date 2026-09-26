import { OpenApi } from "@typia/interface";

import { _decimalIntegerStep } from "./_decimal";

/**
 * Generates a random `bigint` satisfying an integer schema.
 *
 * The schema carries its bounds and step as numbers, but the value is a
 * `bigint`, so the draw runs on integers. Drawing through doubles rounded every
 * value past 2^53, and it checked `multipleOf` against a double's shortest
 * decimal text rather than the integer `BigInt` makes of it, so `random`
 * returned values the validator rejects, or gave up on a range that holds one
 * (#2457). An integral bound or step is read as the integer the double holds,
 * which is the integer the validator compares with.
 */
export const _randomBigint = (schema: OpenApi.IJsonSchema.IInteger): bigint => {
  const lower: bigint | null = boundary(
    schema.minimum,
    schema.exclusiveMinimum,
    "lower",
  );
  const upper: bigint | null = boundary(
    schema.maximum,
    schema.exclusiveMaximum,
    "upper",
  );
  const minimum: bigint =
    lower ?? (upper === null ? BigInt(0) : upper - BigInt(100));
  const maximum: bigint =
    upper ?? (lower === null ? BigInt(100) : lower + BigInt(100));
  if (minimum > maximum)
    throw new Error("Minimum value is greater than maximum value.");
  if (schema.multipleOf === undefined) return between(minimum, maximum);

  const step: bigint | null = integerStep(schema.multipleOf);
  if (step === null || step <= BigInt(0))
    throw new Error("The multipleOf value must be a positive finite number.");
  const first: bigint = ceilDivide(minimum, step);
  const last: bigint = floorDivide(maximum, step);
  if (first > last)
    throw new Error("The range does not contain a multipleOf value.");
  return between(first, last) * step;
};

/**
 * Reads one side's inclusive integer bound.
 *
 * `-Infinity` below or `Infinity` above excludes no integer, so it is no bound
 * at all; `Infinity` below or `-Infinity` above excludes every integer.
 */
const boundary = (
  inclusive: number | undefined,
  exclusive: number | undefined,
  side: "lower" | "upper",
): bigint | null => {
  const candidates: bigint[] = [];
  for (const [value, open] of [
    [inclusive, false],
    [exclusive, true],
  ] as const) {
    if (value === undefined) continue;
    if (Number.isFinite(value) === false) {
      if (value === (side === "lower" ? -Infinity : Infinity)) continue;
      throw new Error("Numeric range has no finite value.");
    }
    candidates.push(
      side === "lower"
        ? open
          ? BigInt(Math.floor(value)) + BigInt(1)
          : BigInt(Math.ceil(value))
        : open
          ? BigInt(Math.ceil(value)) - BigInt(1)
          : BigInt(Math.floor(value)),
    );
  }
  if (candidates.length === 0) return null;
  return candidates.reduce((x, y) =>
    side === "lower" ? (x > y ? x : y) : x < y ? x : y,
  );
};

/**
 * The smallest positive integer a `multipleOf` divides.
 *
 * An integral step is the integer its double holds; a fractional one, such as
 * `1.5`, steps by its smallest integer multiple (`3`).
 */
const integerStep = (multipleOf: number): bigint | null => {
  if (Number.isFinite(multipleOf) === false) return null;
  if (Number.isInteger(multipleOf)) return BigInt(multipleOf);
  return _decimalIntegerStep(multipleOf)?.coefficient ?? null;
};

const ceilDivide = (x: bigint, y: bigint): bigint => {
  const quotient: bigint = x / y;
  return x % y > BigInt(0) ? quotient + BigInt(1) : quotient;
};

const floorDivide = (x: bigint, y: bigint): bigint => {
  const quotient: bigint = x / y;
  return x % y < BigInt(0) ? quotient - BigInt(1) : quotient;
};

/** Draws an integer in `[minimum, maximum]`, scaling one 53-bit sample. */
const between = (minimum: bigint, maximum: bigint): bigint => {
  const scale: bigint = BigInt(1) << BigInt(53);
  const sample: bigint = BigInt(
    Math.min(
      Number(scale - BigInt(1)),
      Math.floor(Math.max(0, Math.random()) * Number(scale)),
    ),
  );
  return minimum + ((maximum - minimum + BigInt(1)) * sample) / scale;
};

import { OpenApi } from "@typia/interface";

import { _randomMultiple } from "./_randomMultiple";

/**
 * Generate a random number from a number schema.
 *
 * The stricter of the inclusive and exclusive bounds wins, a missing side
 * defaults to a window of one hundred, and a step is satisfied through the
 * decimal multiple generator.
 *
 * The optional source supplies draws in [0, 1); it defaults to the platform
 * source resolved when this helper is called. Nested draws use the same
 * source.
 *
 * @evidence contracts/common.md#principled-implementation The bounds are selected from the inclusive and exclusive values with the stricter winning, a missing side defaults to a window of one hundred, the source fraction is scaled into the selected interval using weighted finite endpoints when subtraction overflows; an exclusive bound hit exactly uses an interior midpoint or an exact adjacent binary64 value, and a step is handled by the decimal multiple generator.
 * @evidence contracts/common.md#clear-and-simple-design One function with private boundary helpers.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Errors are explicit for empty and infinite ranges.
 * @evidence contracts/common.md#meaningful-documentation The boundary helper explains the infinite bound rule.
 */
export const _randomNumber = (
  schema: OpenApi.IJsonSchema.INumber,
  source: () => number = Math.random,
): number => {
  const lower: IBoundary | null = getLowerBoundary(schema);
  const upper: IBoundary | null = getUpperBoundary(schema);
  const minimum: number =
    lower?.value ?? (upper === null ? 0 : upper.value - 100);
  const maximum: number =
    upper?.value ?? (lower === null ? 100 : lower.value + 100);
  if (minimum > maximum)
    throw new Error("Minimum value is greater than maximum value.");
  return schema.multipleOf === undefined
    ? scalar(
        {
          minimum,
          maximum,
          exclusiveMinimum: lower?.exclusive ?? false,
          exclusiveMaximum: upper?.exclusive ?? false,
        },
        source,
      )
    : _randomMultiple(
        {
          minimum,
          maximum,
          multipleOf: schema.multipleOf,
          exclusiveMinimum: lower?.exclusive ?? false,
          exclusiveMaximum: upper?.exclusive ?? false,
          integer: false,
        },
        source,
      );
};

const scalar = (
  props: {
    minimum: number;
    maximum: number;
    exclusiveMinimum: boolean;
    exclusiveMaximum: boolean;
  },
  source: () => number,
): number => {
  if (
    props.minimum === props.maximum &&
    (props.exclusiveMinimum || props.exclusiveMaximum)
  )
    throw new Error("Exclusive numeric range is empty.");
  const draw: number = source();
  const width: number = props.maximum - props.minimum;
  const value: number = Math.max(
    props.minimum,
    Math.min(
      props.maximum,
      Number.isFinite(width)
        ? draw * width + props.minimum
        : (1 - draw) * props.minimum + draw * props.maximum,
    ),
  );
  if (
    (props.exclusiveMinimum && value === props.minimum) ||
    (props.exclusiveMaximum && value === props.maximum)
  ) {
    const middle: number = props.minimum / 2 + props.maximum / 2;
    if (middle > props.minimum && middle < props.maximum) return middle;
    const adjacent: number = nextRepresentable(value, value === props.minimum);
    if (
      !Number.isFinite(adjacent) ||
      adjacent < props.minimum ||
      adjacent > props.maximum ||
      (props.exclusiveMinimum && adjacent === props.minimum) ||
      (props.exclusiveMaximum && adjacent === props.maximum)
    )
      throw new Error("Exclusive numeric range has no representable value.");
    return adjacent;
  }
  return value;
};

const getLowerBoundary = (
  schema: OpenApi.IJsonSchema.INumber,
): IBoundary | null =>
  selectBoundary(
    boundary(schema.minimum, false, "lower"),
    boundary(schema.exclusiveMinimum, true, "lower"),
    Math.max,
  );

const getUpperBoundary = (
  schema: OpenApi.IJsonSchema.INumber,
): IBoundary | null =>
  selectBoundary(
    boundary(schema.maximum, false, "upper"),
    boundary(schema.exclusiveMaximum, true, "upper"),
    Math.min,
  );

/**
 * Reads one bound, which may be infinite.
 *
 * A type tag built from an overflowing literal (`Maximum<1e400>`) carries an
 * infinite bound (#2452). `-Infinity` below or `Infinity` above excludes no
 * finite number, so it is no bound at all; `Infinity` below or `-Infinity`
 * above excludes every finite number, so no value can be generated.
 */
const boundary = (
  value: number | undefined,
  exclusive: boolean,
  side: "lower" | "upper",
): IBoundary | null => {
  if (value === undefined) return null;
  if (Number.isFinite(value)) return { value, exclusive };
  if (value === (side === "lower" ? -Infinity : Infinity)) return null;
  throw new Error("Numeric range has no finite value.");
};

const selectBoundary = (
  x: IBoundary | null,
  y: IBoundary | null,
  compare: (x: number, y: number) => number,
): IBoundary | null => {
  if (x === null) return y;
  if (y === null) return x;
  if (x.value === y.value)
    return { value: x.value, exclusive: x.exclusive || y.exclusive };
  return compare(x.value, y.value) === x.value ? x : y;
};

interface IBoundary {
  value: number;
  exclusive: boolean;
}

/**
 * Advances one IEEE 754 binary64 bit pattern, including signed zero and
 * subnormals.
 */
const nextRepresentable = (value: number, upward: boolean): number => {
  if (value === 0) return upward ? Number.MIN_VALUE : -Number.MIN_VALUE;
  const view: DataView = new DataView(new ArrayBuffer(8));
  view.setFloat64(0, value);
  const bits: bigint = view.getBigUint64(0);
  view.setBigUint64(0, bits + (value > 0 === upward ? BigInt(1) : -BigInt(1)));
  return view.getFloat64(0);
};

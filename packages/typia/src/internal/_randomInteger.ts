import { OpenApi } from "@typia/interface";

import { _randomMultiple } from "./_randomMultiple";

export const _randomInteger = (
  schema: OpenApi.IJsonSchema.IInteger,
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
    ? scalar({ minimum, maximum })
    : _randomMultiple({
        minimum,
        maximum,
        multipleOf: schema.multipleOf,
        exclusiveMinimum: lower?.exclusive ?? false,
        exclusiveMaximum: upper?.exclusive ?? false,
        integer: true,
      });
};

const scalar = (props: { minimum: number; maximum: number }): number => {
  const minimum: number = Math.ceil(props.minimum);
  const maximum: number = Math.floor(props.maximum);
  if (minimum > maximum) throw new Error("The integer range is empty.");
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};

const getLowerBoundary = (
  schema: OpenApi.IJsonSchema.IInteger,
): IBoundary | null => {
  const inclusive: IBoundary | null = boundary(schema.minimum, false, "lower");
  const exclusive: IBoundary | null = boundary(
    schema.exclusiveMinimum,
    true,
    "lower",
  );
  const selected: IBoundary | null = selectBoundary(
    inclusive,
    exclusive,
    Math.max,
  );
  if (selected === null) return null;
  return {
    value: selected.exclusive
      ? Math.floor(selected.value) + 1
      : Math.ceil(selected.value),
    exclusive: false,
  };
};

const getUpperBoundary = (
  schema: OpenApi.IJsonSchema.IInteger,
): IBoundary | null => {
  const inclusive: IBoundary | null = boundary(schema.maximum, false, "upper");
  const exclusive: IBoundary | null = boundary(
    schema.exclusiveMaximum,
    true,
    "upper",
  );
  const selected: IBoundary | null = selectBoundary(
    inclusive,
    exclusive,
    Math.min,
  );
  if (selected === null) return null;
  return {
    value: selected.exclusive
      ? Math.ceil(selected.value) - 1
      : Math.floor(selected.value),
    exclusive: false,
  };
};

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

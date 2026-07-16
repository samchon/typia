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
  const inclusive: IBoundary | null =
    schema.minimum === undefined
      ? null
      : { value: schema.minimum, exclusive: false };
  const exclusive: IBoundary | null =
    schema.exclusiveMinimum === undefined
      ? null
      : { value: schema.exclusiveMinimum, exclusive: true };
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
  const inclusive: IBoundary | null =
    schema.maximum === undefined
      ? null
      : { value: schema.maximum, exclusive: false };
  const exclusive: IBoundary | null =
    schema.exclusiveMaximum === undefined
      ? null
      : { value: schema.exclusiveMaximum, exclusive: true };
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

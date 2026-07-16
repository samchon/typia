import { OpenApi } from "@typia/interface";

import { _randomMultiple } from "./_randomMultiple";

export const _randomNumber = (schema: OpenApi.IJsonSchema.INumber): number => {
  const lower: IBoundary | null = getLowerBoundary(schema);
  const upper: IBoundary | null = getUpperBoundary(schema);
  const minimum: number =
    lower?.value ?? (upper === null ? 0 : upper.value - 100);
  const maximum: number =
    upper?.value ?? (lower === null ? 100 : lower.value + 100);
  if (minimum > maximum)
    throw new Error("Minimum value is greater than maximum value.");
  return schema.multipleOf === undefined
    ? scalar({
        minimum,
        maximum,
        exclusiveMinimum: lower?.exclusive ?? false,
        exclusiveMaximum: upper?.exclusive ?? false,
      })
    : _randomMultiple({
        minimum,
        maximum,
        multipleOf: schema.multipleOf,
        exclusiveMinimum: lower?.exclusive ?? false,
        exclusiveMaximum: upper?.exclusive ?? false,
        integer: false,
      });
};

const scalar = (props: {
  minimum: number;
  maximum: number;
  exclusiveMinimum: boolean;
  exclusiveMaximum: boolean;
}): number => {
  if (
    props.minimum === props.maximum &&
    (props.exclusiveMinimum || props.exclusiveMaximum)
  )
    throw new Error("Exclusive numeric range is empty.");
  const value: number =
    Math.random() * (props.maximum - props.minimum) + props.minimum;
  if (
    (props.exclusiveMinimum && value === props.minimum) ||
    (props.exclusiveMaximum && value === props.maximum)
  ) {
    const middle: number = props.minimum + (props.maximum - props.minimum) / 2;
    if (middle <= props.minimum || middle >= props.maximum)
      throw new Error("Exclusive numeric range has no representable value.");
    return middle;
  }
  return value;
};

const getLowerBoundary = (
  schema: OpenApi.IJsonSchema.INumber,
): IBoundary | null =>
  selectBoundary(
    schema.minimum === undefined
      ? null
      : { value: schema.minimum, exclusive: false },
    schema.exclusiveMinimum === undefined
      ? null
      : { value: schema.exclusiveMinimum, exclusive: true },
    Math.max,
  );

const getUpperBoundary = (
  schema: OpenApi.IJsonSchema.INumber,
): IBoundary | null =>
  selectBoundary(
    schema.maximum === undefined
      ? null
      : { value: schema.maximum, exclusive: false },
    schema.exclusiveMaximum === undefined
      ? null
      : { value: schema.exclusiveMaximum, exclusive: true },
    Math.min,
  );

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

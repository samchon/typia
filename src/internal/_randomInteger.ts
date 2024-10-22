import { OpenApi } from "@samchon/openapi";

export const _randomInteger = (props: OpenApi.IJsonSchema.IInteger) => {
  let minimum: number =
    props.minimum ??
    (props.multipleOf ?? 1) *
      (props.maximum === undefined ? 0 : props.maximum - 100);
  if (props.minimum !== undefined && props.exclusiveMinimum === true) minimum++;
  let maximum: number =
    props.maximum ??
    (props.multipleOf ?? 1) *
      (props.minimum === undefined ? 100 : props.minimum + 100);
  if (props.maximum !== undefined && props.exclusiveMaximum === true) maximum--;
  if (minimum > maximum)
    throw new Error("Minimum value is greater than maximum value.");
  return props.multipleOf === undefined
    ? scalar({
        minimum,
        maximum,
      })
    : multiple({
        minimum,
        maximum,
        multipleOf: props.multipleOf,
      });
};

const scalar = (p: { minimum: number; maximum: number }): number =>
  Math.floor(Math.random() * (p.maximum - p.minimum + 1)) + p.minimum;

const multiple = (p: {
  minimum: number;
  maximum: number;
  multipleOf: number;
}): number => {
  const minimum = Math.ceil(p.minimum / p.multipleOf) * p.multipleOf;
  const maximum = Math.floor(p.maximum / p.multipleOf) * p.multipleOf;
  if (minimum > maximum)
    throw new Error(
      "The range of the integer is smaller than the multipleOf value.",
    );
  const value: number = scalar({
    minimum,
    maximum,
  });
  return value - (value % p.multipleOf);
};

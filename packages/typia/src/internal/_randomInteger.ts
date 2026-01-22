import { OpenApi } from "@samchon/openapi";

export const _randomInteger = (schema: OpenApi.IJsonSchema.IInteger) => {
  let minimum: number =
    schema.minimum ??
    schema.exclusiveMinimum ??
    (schema.multipleOf ?? 1) *
      (schema.maximum === undefined && schema.exclusiveMaximum === undefined
        ? 0
        : (schema.maximum ?? schema.exclusiveMaximum!) - 100);
  if (schema.exclusiveMinimum !== undefined) minimum++;
  let maximum: number =
    schema.maximum ??
    schema.exclusiveMaximum ??
    (schema.multipleOf ?? 1) *
      (schema.minimum === undefined && schema.exclusiveMinimum === undefined
        ? 100
        : (schema.minimum ?? schema.exclusiveMinimum!) + 100);
  if (schema.exclusiveMaximum !== undefined) maximum--;
  if (minimum > maximum)
    throw new Error("Minimum value is greater than maximum value.");
  return schema.multipleOf === undefined
    ? scalar({
        minimum,
        maximum,
      })
    : multiple({
        minimum,
        maximum,
        multipleOf: schema.multipleOf,
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

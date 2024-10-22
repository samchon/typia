import { OpenApi } from "@samchon/openapi";

export const _randomNumber = (schema: OpenApi.IJsonSchema.INumber): number => {
  const minimum: number =
    schema.minimum ??
    (schema.multipleOf ?? 1) *
      (schema.maximum === undefined ? 0 : schema.maximum - 100);
  const maximum: number =
    schema.maximum ??
    (schema.multipleOf ?? 1) *
      (schema.minimum === undefined ? 100 : schema.minimum + 100);
  if (minimum > maximum)
    throw new Error("Minimum value is greater than maximum value.");
  return schema.multipleOf === undefined
    ? scalar({
        minimum,
        maximum,
        exclusiveMinimum: schema.exclusiveMinimum,
        exclusiveMaximum: schema.exclusiveMaximum,
      })
    : multiple({
        minimum,
        maximum,
        multipleOf: schema.multipleOf,
        exclusiveMinimum: schema.exclusiveMinimum,
        exclusiveMaximum: schema.exclusiveMaximum,
      });
};

const scalar = (p: {
  minimum: number;
  maximum: number;
  exclusiveMinimum?: boolean;
  exclusiveMaximum?: boolean;
}): number => {
  if (p.minimum === p.maximum && (p.exclusiveMinimum || p.exclusiveMaximum))
    throw new Error(
      p.exclusiveMinimum
        ? "Exclusive minimum value equals maximum value."
        : "Exclusive maximum value equals minimum value.",
    );
  while (true) {
    const value: number = Math.random() * (p.maximum - p.minimum) + p.minimum;
    if (p.exclusiveMinimum && value === p.minimum) continue;
    else if (p.exclusiveMaximum && value === p.maximum) continue;
    return value;
  }
};

const multiple = (p: {
  minimum: number;
  maximum: number;
  multipleOf: number;
  exclusiveMinimum?: boolean;
  exclusiveMaximum?: boolean;
}): number => {
  let minimum = Math.ceil(p.minimum / p.multipleOf) * p.multipleOf;
  let maximum = Math.floor(p.maximum / p.multipleOf) * p.multipleOf;
  if (p.exclusiveMinimum === true && minimum % p.multipleOf === 0)
    minimum += p.multipleOf;
  if (p.exclusiveMaximum === true && maximum % p.multipleOf === 0)
    maximum -= p.multipleOf;
  if (minimum > maximum)
    throw new Error(
      "The range of the integer is smaller than the multipleOf value.",
    );
  const value: number = scalar({
    minimum,
    maximum,
    exclusiveMinimum: p.exclusiveMinimum,
    exclusiveMaximum: p.exclusiveMaximum,
  });
  return value - (value % p.multipleOf);
};

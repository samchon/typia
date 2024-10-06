import { OpenApi } from "@samchon/openapi";

export const $randomNumber = (props: OpenApi.IJsonSchema.INumber): number => {
  const minimum: number =
    props.minimum ?? (props.maximum === undefined ? 0 : props.maximum - 100);
  const maximum: number =
    props.maximum ?? (props.minimum === undefined ? 100 : props.minimum + 100);
  if (minimum > maximum)
    throw new Error("Minimum value is greater than maximum value.");
  return props.multipleOf === undefined
    ? scalar({
        minimum,
        maximum,
        exclusiveMinimum: props.exclusiveMinimum,
        exclusiveMaximum: props.exclusiveMaximum,
      })
    : multiple({
        minimum,
        maximum,
        multipleOf: props.multipleOf,
        exclusiveMinimum: props.exclusiveMinimum,
        exclusiveMaximum: props.exclusiveMaximum,
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
  return scalar({
    minimum,
    maximum,
    exclusiveMinimum: p.exclusiveMinimum,
    exclusiveMaximum: p.exclusiveMaximum,
  });
};

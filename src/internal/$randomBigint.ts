import { OpenApi } from "@samchon/openapi";

import { $randomInteger } from "./$randomInteger";

export const $randomBigint = (
  props: Omit<OpenApi.IJsonSchema.IInteger, "type">,
): bigint =>
  BigInt(
    $randomInteger({
      minimum: props.minimum !== undefined ? Number(props.minimum) : undefined,
      maximum: props.maximum !== undefined ? Number(props.maximum) : undefined,
      exclusiveMinimum: props.exclusiveMinimum,
      exclusiveMaximum: props.exclusiveMaximum,
    }),
  );

import { OpenApi } from "@samchon/openapi";

import { $randomInteger } from "./$randomInteger";

export const $randomBigint = (props: OpenApi.IJsonSchema.IInteger): bigint =>
  BigInt($randomInteger(props));

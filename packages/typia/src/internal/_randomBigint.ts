import { OpenApi } from "@samchon/openapi";

import { _randomInteger } from "./_randomInteger";

export const _randomBigint = (props: OpenApi.IJsonSchema.IInteger): bigint =>
  BigInt(_randomInteger(props));

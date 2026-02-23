import { OpenApi } from "@typia/interface";

import { _randomInteger } from "./_randomInteger";

export const _randomBigint = (props: OpenApi.IJsonSchema.IInteger): bigint =>
  BigInt(_randomInteger(props));

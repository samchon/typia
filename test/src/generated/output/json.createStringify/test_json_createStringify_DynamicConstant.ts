import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_json_createStringify_DynamicConstant = _test_json_stringify(
  "DynamicConstant",
)<DynamicConstant>(DynamicConstant)((input: DynamicConstant): string => {
  const $io1 = (input: any): boolean =>
    "number" === typeof input.a &&
    "number" === typeof input.b &&
    "number" === typeof input.c &&
    "number" === typeof input.d;
  const $number = (typia.json.createStringify as any).number;
  return `{"value":${`{"a":${$number(((input as any).value as any).a)},"b":${$number(((input as any).value as any).b)},"c":${$number(((input as any).value as any).c)},"d":${$number(((input as any).value as any).d)}}`}}`;
});

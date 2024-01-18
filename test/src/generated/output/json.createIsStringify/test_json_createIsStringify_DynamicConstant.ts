import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_json_createIsStringify_DynamicConstant =
  _test_json_isStringify("DynamicConstant")<DynamicConstant>(DynamicConstant)(
    (input: DynamicConstant): string | null => {
      const is = (input: any): input is DynamicConstant => {
        return (
          "object" === typeof input &&
          null !== input &&
          "object" === typeof (input as any).value &&
          null !== (input as any).value &&
          "number" === typeof ((input as any).value as any).a &&
          Number.isFinite(((input as any).value as any).a) &&
          "number" === typeof ((input as any).value as any).b &&
          Number.isFinite(((input as any).value as any).b) &&
          "number" === typeof ((input as any).value as any).c &&
          Number.isFinite(((input as any).value as any).c) &&
          "number" === typeof ((input as any).value as any).d &&
          Number.isFinite(((input as any).value as any).d)
        );
      };
      const stringify = (input: DynamicConstant): string => {
        const $io1 = (input: any): boolean =>
          "number" === typeof input.a &&
          "number" === typeof input.b &&
          "number" === typeof input.c &&
          "number" === typeof input.d;
        // @ts-ignore;
        declare const require: (lib: string) => any;
        const $number = require("typia/lib/functional/$number").$number;
        return `{"value":${`{"a":${$number(
          ((input as any).value as any).a,
        )},"b":${$number(((input as any).value as any).b)},"c":${$number(
          ((input as any).value as any).c,
        )},"d":${$number(((input as any).value as any).d)}}`}}`;
      };
      return is(input) ? stringify(input) : null;
    },
  );

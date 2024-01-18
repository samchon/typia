import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_json_createIsStringify_DynamicSimple = _test_json_isStringify(
  "DynamicSimple",
)<DynamicSimple>(DynamicSimple)((input: DynamicSimple): string | null => {
  const is = (input: any): input is DynamicSimple => {
    const $io0 = (input: any): boolean =>
      "object" === typeof input.value &&
      null !== input.value &&
      false === Array.isArray(input.value) &&
      $io1(input.value);
    const $io1 = (input: any): boolean =>
      Object.keys(input).every((key: any) => {
        const value = input[key];
        if (undefined === value) return true;
        if (true) return "number" === typeof value && Number.isFinite(value);
        return true;
      });
    return "object" === typeof input && null !== input && $io0(input);
  };
  const stringify = (input: DynamicSimple): string => {
    const $io1 = (input: any): boolean =>
      Object.keys(input).every((key: any) => {
        const value = input[key];
        if (undefined === value) return true;
        if (true) return "number" === typeof value;
        return true;
      });
    // @ts-ignore;
    declare const require: (lib: string) => any;
    const $number = require("typia/lib/functional/$number").$number;
    const $so0 = (input: any): any => `{"value":${$so1(input.value)}}`;
    const $so1 = (input: any): any =>
      `{${Object.entries(input)
        .map(([key, value]: [string, any]) => {
          if (undefined === value) return "";
          return `${JSON.stringify(key)}:${$number(value)}`;
        })
        .filter((str: any) => "" !== str)
        .join(",")}}`;
    return $so0(input);
  };
  return is(input) ? stringify(input) : null;
});

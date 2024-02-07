import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_json_isStringify_DynamicArray = _test_json_isStringify(
  "DynamicArray",
)<DynamicArray>(DynamicArray)((input) =>
  ((input: DynamicArray): string | null => {
    const is = (input: any): input is DynamicArray => {
      const $io0 = (input: any): boolean =>
        "object" === typeof input.value &&
        null !== input.value &&
        false === Array.isArray(input.value) &&
        $io1(input.value);
      const $io1 = (input: any): boolean =>
        Object.keys(input).every((key: any) => {
          const value = input[key];
          if (undefined === value) return true;
          return (
            Array.isArray(value) &&
            value.every((elem: any) => "string" === typeof elem)
          );
        });
      return "object" === typeof input && null !== input && $io0(input);
    };
    const stringify = (input: DynamicArray): string => {
      const $io1 = (input: any): boolean =>
        Object.keys(input).every((key: any) => {
          const value = input[key];
          if (undefined === value) return true;
          return (
            Array.isArray(value) &&
            value.every((elem: any) => "string" === typeof elem)
          );
        });
      const $string = (typia.json.isStringify as any).string;
      const $so0 = (input: any): any => `{"value":${$so1(input.value)}}`;
      const $so1 = (input: any): any =>
        `{${Object.entries(input)
          .map(([key, value]: [string, any]) => {
            if (undefined === value) return "";
            return `${JSON.stringify(key)}:${`[${value
              .map((elem: any) => $string(elem))
              .join(",")}]`}`;
          })
          .filter((str: any) => "" !== str)
          .join(",")}}`;
      return $so0(input);
    };
    return is(input) ? stringify(input) : null;
  })(input),
);

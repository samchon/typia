import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_json_createStringify_DynamicArray = _test_json_stringify(
  "DynamicArray",
)<DynamicArray>(DynamicArray)((input: DynamicArray): string => {
  const $io1 = (input: any): boolean =>
    Object.keys(input).every((key: any) => {
      const value = input[key];
      if (undefined === value) return true;
      if (true)
        return (
          Array.isArray(value) &&
          value.every((elem: any) => "string" === typeof elem)
        );
      return true;
    });
  const $string = (typia.json.createStringify as any).string;
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
});

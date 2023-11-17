import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_json_createStringify_DynamicSimple = _test_json_stringify(
  "DynamicSimple",
)<DynamicSimple>(DynamicSimple)((input: DynamicSimple): string => {
  const $io1 = (input: any): boolean =>
    Object.keys(input).every((key: any) => {
      const value = input[key];
      if (undefined === value) return true;
      if (true) return "number" === typeof value;
      return true;
    });
  const $number = (typia.json.createStringify as any).number;
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
});

import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_json_createStringify_DynamicTemplate = _test_json_stringify(
  "DynamicTemplate",
)<DynamicTemplate>(DynamicTemplate)((input: DynamicTemplate): string => {
  const $string = (typia.json.createStringify as any).string;
  const $number = (typia.json.createStringify as any).number;
  const $so0 = (input: any): any =>
    `{${Object.entries(input)
      .map(([key, value]: [string, any]) => {
        if (undefined === value) return "";
        if (RegExp(/^(prefix_(.*))/).test(key))
          return `${JSON.stringify(key)}:${$string(value)}`;
        if (RegExp(/((.*)_postfix)$/).test(key))
          return `${JSON.stringify(key)}:${$string(value)}`;
        if (RegExp(/^(value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/).test(key))
          return `${JSON.stringify(key)}:${$number(value)}`;
        if (
          RegExp(
            /^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
          ).test(key)
        )
          return `${JSON.stringify(key)}:${value}`;
        return "";
      })
      .filter((str: any) => "" !== str)
      .join(",")}}`;
  return $so0(input);
});

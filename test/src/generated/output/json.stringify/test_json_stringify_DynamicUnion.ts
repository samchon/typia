import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_json_stringify_DynamicUnion = _test_json_stringify(
  "DynamicUnion",
)<DynamicUnion>(DynamicUnion)((input) =>
  ((input: DynamicUnion): string => {
    const $string = require("typia/lib/functional/$string").$string;
    const $number = require("typia/lib/functional/$number").$number;
    const $so0 = (input: any): any =>
      `{${Object.entries(input)
        .map(([key, value]: [string, any]) => {
          if (undefined === value) return "";
          if (RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(key))
            return `${JSON.stringify(key)}:${$string(value)}`;
          if (RegExp(/^(prefix_(.*))/).test(key))
            return `${JSON.stringify(key)}:${$string(value)}`;
          if (RegExp(/((.*)_postfix)$/).test(key))
            return `${JSON.stringify(key)}:${$string(value)}`;
          if (
            RegExp(
              /^(value_between_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
            ).test(key)
          )
            return `${JSON.stringify(key)}:${$number(value)}`;
          return "";
        })
        .filter((str: any) => "" !== str)
        .join(",")}}`;
    return $so0(input);
  })(input),
);

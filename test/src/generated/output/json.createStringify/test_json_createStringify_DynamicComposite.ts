import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { DynamicComposite } from "../../../structures/DynamicComposite";

export const test_json_createStringify_DynamicComposite = _test_json_stringify(
  "DynamicComposite",
)<DynamicComposite>(DynamicComposite)((input: DynamicComposite): string => {
  const $string = require("typia/lib/functional/$string").$string;
  const $number = require("typia/lib/functional/$number").$number;
  const $throws = require("typia/lib/functional/$throws").$throws(
    "typia.json.createStringify",
  );
  const $tail = require("typia/lib/functional/$tail").$tail;
  const $so0 = (input: any): any =>
    `{${$tail(
      `"id":${$string(input.id)},"name":${$string(input.name)},${Object.entries(
        input,
      )
        .map(([key, value]: [string, any]) => {
          if (undefined === value) return "";
          if (["id", "name"].some((regular: any) => regular === key)) return "";
          if (RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(key))
            return `${JSON.stringify(key)}:${$number(value)}`;
          if (RegExp(/^(prefix_(.*))/).test(key))
            return `${JSON.stringify(key)}:${$string(value)}`;
          if (RegExp(/((.*)_postfix)$/).test(key))
            return `${JSON.stringify(key)}:${$string(value)}`;
          if (RegExp(/^(value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/).test(key))
            return `${JSON.stringify(key)}:${(() => {
              if ("string" === typeof value) return $string(value);
              if ("number" === typeof value) return $number(value);
              if ("boolean" === typeof value) return value;
              $throws({
                expected: "(boolean | number | string)",
                value: value,
              });
            })()}`;
          if (
            RegExp(
              /^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
            ).test(key)
          )
            return `${JSON.stringify(key)}:${value}`;
          return "";
        })
        .filter((str: any) => "" !== str)
        .join(",")}`,
    )}}`;
  return $so0(input);
});

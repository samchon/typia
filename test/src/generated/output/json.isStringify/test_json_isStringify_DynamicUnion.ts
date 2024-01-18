import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_json_isStringify_DynamicUnion = _test_json_isStringify(
  "DynamicUnion",
)<DynamicUnion>(DynamicUnion)((input) =>
  ((input: DynamicUnion): string | null => {
    const is = (input: any): input is DynamicUnion => {
      const $io0 = (input: any): boolean =>
        Object.keys(input).every((key: any) => {
          const value = input[key];
          if (undefined === value) return true;
          if ("number" === typeof Number(key) && Number.isFinite(Number(key)))
            return "string" === typeof value;
          if ("string" === typeof key && RegExp(/^prefix_(.*)/).test(key))
            return "string" === typeof value;
          if ("string" === typeof key && RegExp(/(.*)_postfix$/).test(key))
            return "string" === typeof value;
          if (
            "string" === typeof key &&
            RegExp(
              /^value_between_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
            ).test(key)
          )
            return "number" === typeof value && Number.isFinite(value);
          return true;
        });
      return (
        "object" === typeof input &&
        null !== input &&
        false === Array.isArray(input) &&
        $io0(input)
      );
    };
    const stringify = (input: DynamicUnion): string => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
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
    };
    return is(input) ? stringify(input) : null;
  })(input),
);

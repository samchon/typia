import typia from "typia";

import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_json_createAssertStringify_DynamicUnion =
  _test_json_assertStringify("DynamicUnion")<DynamicUnion>(DynamicUnion)(
    (input: any): string => {
      const assert = (input: any): DynamicUnion => {
        const __is = (input: any): input is DynamicUnion => {
          const $io0 = (input: any): boolean =>
            Object.keys(input).every((key: any) => {
              const value = input[key];
              if (undefined === value) return true;
              if (
                "number" === typeof Number(key) &&
                Number.isFinite(Number(key))
              )
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
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is DynamicUnion => {
            // @ts-ignore;
            declare const require: (lib: string) => any;
            const $guard = require("typia/lib/functional/$guard").$guard(
              "typia.json.createAssertStringify",
            );
            const $join = require("typia/lib/functional/$join").$join;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                const value = input[key];
                if (undefined === value) return true;
                if (
                  "number" === typeof Number(key) &&
                  Number.isFinite(Number(key))
                )
                  return (
                    "string" === typeof value ||
                    $guard(_exceptionable, {
                      path: _path + $join(key),
                      expected: "string",
                      value: value,
                    })
                  );
                if ("string" === typeof key && RegExp(/^prefix_(.*)/).test(key))
                  return (
                    "string" === typeof value ||
                    $guard(_exceptionable, {
                      path: _path + $join(key),
                      expected: "string",
                      value: value,
                    })
                  );
                if (
                  "string" === typeof key &&
                  RegExp(/(.*)_postfix$/).test(key)
                )
                  return (
                    "string" === typeof value ||
                    $guard(_exceptionable, {
                      path: _path + $join(key),
                      expected: "string",
                      value: value,
                    })
                  );
                if (
                  "string" === typeof key &&
                  RegExp(
                    /^value_between_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                  ).test(key)
                )
                  return (
                    ("number" === typeof value && Number.isFinite(value)) ||
                    $guard(_exceptionable, {
                      path: _path + $join(key),
                      expected: "number",
                      value: value,
                    })
                  );
                return true;
              });
            return (
              ((("object" === typeof input &&
                null !== input &&
                false === Array.isArray(input)) ||
                $guard(true, {
                  path: _path + "",
                  expected: "DynamicUnion",
                  value: input,
                })) &&
                $ao0(input, _path + "", true)) ||
              $guard(true, {
                path: _path + "",
                expected: "DynamicUnion",
                value: input,
              })
            );
          })(input, "$input", true);
        return input;
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
      return stringify(assert(input));
    },
  );

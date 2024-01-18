import typia from "typia";

import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { DynamicTree } from "../../../structures/DynamicTree";

export const test_json_assertStringify_DynamicTree = _test_json_assertStringify(
  "DynamicTree",
)<DynamicTree>(DynamicTree)((input) =>
  ((input: any): string => {
    const assert = (input: any): DynamicTree => {
      const __is = (input: any): input is DynamicTree => {
        const $io0 = (input: any): boolean =>
          "string" === typeof input.id &&
          "number" === typeof input.sequence &&
          Number.isFinite(input.sequence) &&
          "object" === typeof input.children &&
          null !== input.children &&
          false === Array.isArray(input.children) &&
          $io1(input.children);
        const $io1 = (input: any): boolean =>
          Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value) return true;
            if (true)
              return "object" === typeof value && null !== value && $io0(value);
            return true;
          });
        return "object" === typeof input && null !== input && $io0(input);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is DynamicTree => {
          // @ts-ignore;
          declare const require: (lib: string) => any;
          const $guard = require("typia/lib/functional/$guard").$guard(
            "typia.json.assertStringify",
          );
          const $join = require("typia/lib/functional/$join").$join;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("string" === typeof input.id ||
              $guard(_exceptionable, {
                path: _path + ".id",
                expected: "string",
                value: input.id,
              })) &&
            (("number" === typeof input.sequence &&
              Number.isFinite(input.sequence)) ||
              $guard(_exceptionable, {
                path: _path + ".sequence",
                expected: "number",
                value: input.sequence,
              })) &&
            (((("object" === typeof input.children &&
              null !== input.children &&
              false === Array.isArray(input.children)) ||
              $guard(_exceptionable, {
                path: _path + ".children",
                expected: "Record<string, DynamicTree>",
                value: input.children,
              })) &&
              $ao1(
                input.children,
                _path + ".children",
                true && _exceptionable,
              )) ||
              $guard(_exceptionable, {
                path: _path + ".children",
                expected: "Record<string, DynamicTree>",
                value: input.children,
              }));
          const $ao1 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              const value = input[key];
              if (undefined === value) return true;
              if (true)
                return (
                  ((("object" === typeof value && null !== value) ||
                    $guard(_exceptionable, {
                      path: _path + $join(key),
                      expected: "DynamicTree",
                      value: value,
                    })) &&
                    $ao0(value, _path + $join(key), true && _exceptionable)) ||
                  $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "DynamicTree",
                    value: value,
                  })
                );
              return true;
            });
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(true, {
                path: _path + "",
                expected: "DynamicTree",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "DynamicTree",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    };
    const stringify = (input: DynamicTree): string => {
      const $io0 = (input: any): boolean =>
        "string" === typeof input.id &&
        "number" === typeof input.sequence &&
        "object" === typeof input.children &&
        null !== input.children &&
        false === Array.isArray(input.children) &&
        $io1(input.children);
      const $io1 = (input: any): boolean =>
        Object.keys(input).every((key: any) => {
          const value = input[key];
          if (undefined === value) return true;
          if (true)
            return "object" === typeof value && null !== value && $io0(value);
          return true;
        });
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $string = require("typia/lib/functional/$string").$string;
      const $number = require("typia/lib/functional/$number").$number;
      const $so0 = (input: any): any =>
        `{"id":${$string(input.id)},"sequence":${$number(
          input.sequence,
        )},"children":${$so1(input.children)}}`;
      const $so1 = (input: any): any =>
        `{${Object.entries(input)
          .map(([key, value]: [string, any]) => {
            if (undefined === value) return "";
            return `${JSON.stringify(key)}:${$so0(value)}`;
          })
          .filter((str: any) => "" !== str)
          .join(",")}}`;
      return $so0(input);
    };
    return stringify(assert(input));
  })(input),
);

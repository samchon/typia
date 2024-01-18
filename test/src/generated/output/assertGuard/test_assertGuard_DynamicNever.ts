import typia from "typia";

import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { DynamicNever } from "../../../structures/DynamicNever";

export const test_assertGuard_DynamicNever = _test_assertGuard(
  "DynamicNever",
)<DynamicNever>(DynamicNever)((input) =>
  ((input: any): asserts input is DynamicNever => {
    const __is = (input: any): input is DynamicNever => {
      const $io0 = (input: any): boolean =>
        Object.keys(input).every((key: any) => {
          const value = input[key];
          if (undefined === value) return true;
          if (true) return null !== value && undefined === value;
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
      ): input is DynamicNever => {
        // @ts-ignore;
        declare const require: (lib: string) => any;
        const $guard = require("typia/lib/functional/$guard").$guard(
          "typia.assertGuard",
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
            if (true)
              return (
                (null !== value ||
                  $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  })) &&
                (undefined === value ||
                  $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  }))
              );
            return true;
          });
        return (
          ((("object" === typeof input &&
            null !== input &&
            false === Array.isArray(input)) ||
            $guard(true, {
              path: _path + "",
              expected: "DynamicNever",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "DynamicNever",
            value: input,
          })
        );
      })(input, "$input", true);
  })(input),
);

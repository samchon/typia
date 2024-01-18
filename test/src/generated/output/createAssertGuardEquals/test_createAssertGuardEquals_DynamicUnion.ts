import typia from "typia";

import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_createAssertGuardEquals_DynamicUnion =
  _test_assertGuardEquals("DynamicUnion")<DynamicUnion>(DynamicUnion)(
    (input: any): asserts input is DynamicUnion => {
      const __is = (
        input: any,
        _exceptionable: boolean = true,
      ): input is DynamicUnion => {
        // @ts-ignore;
        declare const require: (lib: string) => any;
        const $join = require("typia/lib/functional/$join").$join;
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
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
            return false;
          });
        return (
          "object" === typeof input &&
          null !== input &&
          false === Array.isArray(input) &&
          $io0(input, true)
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
            "typia.createAssertGuardEquals",
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
              if ("string" === typeof key && RegExp(/(.*)_postfix$/).test(key))
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
              return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value,
              });
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
    },
  );

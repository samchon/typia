import typia from "typia";

import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_createAssertGuardEquals_DynamicConstant =
  _test_assertGuardEquals("DynamicConstant")<DynamicConstant>(DynamicConstant)(
    (input: any): asserts input is DynamicConstant => {
      const __is = (
        input: any,
        _exceptionable: boolean = true,
      ): input is DynamicConstant => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
          "object" === typeof input.value &&
          null !== input.value &&
          $io1(input.value, true && _exceptionable) &&
          (1 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (["value"].some((prop: any) => key === prop)) return true;
              const value = input[key];
              if (undefined === value) return true;
              return false;
            }));
        const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
          "number" === typeof input.a &&
          Number.isFinite(input.a) &&
          "number" === typeof input.b &&
          Number.isFinite(input.b) &&
          "number" === typeof input.c &&
          Number.isFinite(input.c) &&
          "number" === typeof input.d &&
          Number.isFinite(input.d) &&
          (4 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (["a", "b", "c", "d"].some((prop: any) => key === prop))
                return true;
              const value = input[key];
              if (undefined === value) return true;
              return false;
            }));
        return "object" === typeof input && null !== input && $io0(input, true);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is DynamicConstant => {
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
            (((("object" === typeof input.value && null !== input.value) ||
              $guard(_exceptionable, {
                path: _path + ".value",
                expected: "__type",
                value: input.value,
              })) &&
              $ao1(input.value, _path + ".value", true && _exceptionable)) ||
              $guard(_exceptionable, {
                path: _path + ".value",
                expected: "__type",
                value: input.value,
              })) &&
            (1 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (["value"].some((prop: any) => key === prop)) return true;
                const value = input[key];
                if (undefined === value) return true;
                return $guard(_exceptionable, {
                  path: _path + $join(key),
                  expected: "undefined",
                  value: value,
                });
              }));
          const $ao1 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (("number" === typeof input.a && Number.isFinite(input.a)) ||
              $guard(_exceptionable, {
                path: _path + ".a",
                expected: "number",
                value: input.a,
              })) &&
            (("number" === typeof input.b && Number.isFinite(input.b)) ||
              $guard(_exceptionable, {
                path: _path + ".b",
                expected: "number",
                value: input.b,
              })) &&
            (("number" === typeof input.c && Number.isFinite(input.c)) ||
              $guard(_exceptionable, {
                path: _path + ".c",
                expected: "number",
                value: input.c,
              })) &&
            (("number" === typeof input.d && Number.isFinite(input.d)) ||
              $guard(_exceptionable, {
                path: _path + ".d",
                expected: "number",
                value: input.d,
              })) &&
            (4 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (["a", "b", "c", "d"].some((prop: any) => key === prop))
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return $guard(_exceptionable, {
                  path: _path + $join(key),
                  expected: "undefined",
                  value: value,
                });
              }));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(true, {
                path: _path + "",
                expected: "DynamicConstant",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "DynamicConstant",
              value: input,
            })
          );
        })(input, "$input", true);
    },
  );

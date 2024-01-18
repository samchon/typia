import typia from "typia";

import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { CommentTagBigInt } from "../../../structures/CommentTagBigInt";

export const test_assertGuardEquals_CommentTagBigInt = _test_assertGuardEquals(
  "CommentTagBigInt",
)<CommentTagBigInt>(CommentTagBigInt)((input) =>
  ((input: any): asserts input is CommentTagBigInt => {
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is CommentTagBigInt => {
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
        "bigint" === typeof input.value &&
        "bigint" === typeof input.ranged &&
        0 <= input.ranged &&
        input.ranged <= 100 &&
        "bigint" === typeof input.minimum &&
        0 <= input.minimum &&
        "bigint" === typeof input.maximum &&
        input.maximum <= 100 &&
        "bigint" === typeof input.multipleOf &&
        input.multipleOf % 3n === 0n &&
        (5 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (
              ["value", "ranged", "minimum", "maximum", "multipleOf"].some(
                (prop: any) => key === prop,
              )
            )
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
      ): input is CommentTagBigInt => {
        // @ts-ignore;
        declare const require: (lib: string) => any;
        const $guard = require("typia/lib/functional/$guard").$guard(
          "typia.assertGuardEquals",
        );
        const $join = require("typia/lib/functional/$join").$join;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("bigint" === typeof input.value ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "bigint",
              value: input.value,
            })) &&
          (("bigint" === typeof input.ranged &&
            (0 <= input.ranged ||
              $guard(_exceptionable, {
                path: _path + ".ranged",
                expected: "bigint & Minimum<0n>",
                value: input.ranged,
              })) &&
            (input.ranged <= 100 ||
              $guard(_exceptionable, {
                path: _path + ".ranged",
                expected: "bigint & Maximum<100n>",
                value: input.ranged,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".ranged",
              expected: "(bigint & Minimum<0n> & Maximum<100n>)",
              value: input.ranged,
            })) &&
          (("bigint" === typeof input.minimum &&
            (0 <= input.minimum ||
              $guard(_exceptionable, {
                path: _path + ".minimum",
                expected: "bigint & Minimum<0n>",
                value: input.minimum,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".minimum",
              expected: "(bigint & Minimum<0n>)",
              value: input.minimum,
            })) &&
          (("bigint" === typeof input.maximum &&
            (input.maximum <= 100 ||
              $guard(_exceptionable, {
                path: _path + ".maximum",
                expected: "bigint & Maximum<100n>",
                value: input.maximum,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".maximum",
              expected: "(bigint & Maximum<100n>)",
              value: input.maximum,
            })) &&
          (("bigint" === typeof input.multipleOf &&
            (input.multipleOf % 3n === 0n ||
              $guard(_exceptionable, {
                path: _path + ".multipleOf",
                expected: "bigint & MultipleOf<3n>",
                value: input.multipleOf,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".multipleOf",
              expected: "(bigint & MultipleOf<3n>)",
              value: input.multipleOf,
            })) &&
          (5 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (
                ["value", "ranged", "minimum", "maximum", "multipleOf"].some(
                  (prop: any) => key === prop,
                )
              )
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
              expected: "CommentTagBigInt",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "CommentTagBigInt",
            value: input,
          })
        );
      })(input, "$input", true);
  })(input),
);

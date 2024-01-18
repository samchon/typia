import typia from "typia";

import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { TypeTagObjectUnion } from "../../../structures/TypeTagObjectUnion";

export const test_assertEquals_TypeTagObjectUnion = _test_assertEquals(
  "TypeTagObjectUnion",
)<TypeTagObjectUnion>(TypeTagObjectUnion)((input) =>
  ((input: any): TypeTagObjectUnion => {
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is TypeTagObjectUnion => {
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
        "number" === typeof input.value &&
        Number.isFinite(input.value) &&
        3 <= input.value &&
        (1 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["value"].some((prop: any) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
        "string" === typeof input.value &&
        3 <= input.value.length &&
        input.value.length <= 7 &&
        (1 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["value"].some((prop: any) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $iu0 = (input: any, _exceptionable: boolean = true): any =>
        (() => {
          if (
            "string" === typeof input.value &&
            3 <= input.value.length &&
            input.value.length <= 7
          )
            return $io1(input, true && _exceptionable);
          else if (
            "number" === typeof input.value &&
            Number.isFinite(input.value) &&
            3 <= input.value
          )
            return $io0(input, true && _exceptionable);
          else return false;
        })();
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any, _index1: number) =>
            "object" === typeof elem && null !== elem && $iu0(elem, true),
        )
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is TypeTagObjectUnion => {
        // @ts-ignore;
        declare const require: (lib: string) => any;
        const $guard = require("typia/lib/functional/$guard").$guard(
          "typia.assertEquals",
        );
        const $join = require("typia/lib/functional/$join").$join;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (("number" === typeof input.value &&
            (Number.isFinite(input.value) ||
              $guard(_exceptionable, {
                path: _path + ".value",
                expected: "number",
                value: input.value,
              })) &&
            (3 <= input.value ||
              $guard(_exceptionable, {
                path: _path + ".value",
                expected: "number & Minimum<3>",
                value: input.value,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "(number & Minimum<3>)",
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
          (("string" === typeof input.value &&
            (3 <= input.value.length ||
              $guard(_exceptionable, {
                path: _path + ".value",
                expected: "string & MinLength<3>",
                value: input.value,
              })) &&
            (input.value.length <= 7 ||
              $guard(_exceptionable, {
                path: _path + ".value",
                expected: "string & MaxLength<7>",
                value: input.value,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "(string & MinLength<3> & MaxLength<7>)",
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
        const $au0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): any =>
          (() => {
            if (
              "string" === typeof input.value &&
              (3 <= input.value.length ||
                $guard(_exceptionable, {
                  path: _path + ".value",
                  expected: "string & MinLength<3>",
                  value: input.value,
                })) &&
              (input.value.length <= 7 ||
                $guard(_exceptionable, {
                  path: _path + ".value",
                  expected: "string & MaxLength<7>",
                  value: input.value,
                }))
            )
              return $ao1(input, _path, true && _exceptionable);
            else if (
              "number" === typeof input.value &&
              (3 <= input.value ||
                $guard(_exceptionable, {
                  path: _path + ".value",
                  expected: "number & Minimum<3>",
                  value: input.value,
                }))
            )
              return $ao0(input, _path, true && _exceptionable);
            else
              return $guard(_exceptionable, {
                path: _path,
                expected:
                  "(TypeTagObjectUnion.Literal | TypeTagObjectUnion.Numeric)",
                value: input,
              });
          })();
        return (
          ((Array.isArray(input) ||
            $guard(true, {
              path: _path + "",
              expected: "TypeTagObjectUnion",
              value: input,
            })) &&
            input.every(
              (elem: any, _index1: number) =>
                ((("object" === typeof elem && null !== elem) ||
                  $guard(true, {
                    path: _path + "[" + _index1 + "]",
                    expected:
                      "(TypeTagObjectUnion.Literal | TypeTagObjectUnion.Numeric)",
                    value: elem,
                  })) &&
                  $au0(elem, _path + "[" + _index1 + "]", true)) ||
                $guard(true, {
                  path: _path + "[" + _index1 + "]",
                  expected:
                    "(TypeTagObjectUnion.Literal | TypeTagObjectUnion.Numeric)",
                  value: elem,
                }),
            )) ||
          $guard(true, {
            path: _path + "",
            expected: "TypeTagObjectUnion",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  })(input),
);

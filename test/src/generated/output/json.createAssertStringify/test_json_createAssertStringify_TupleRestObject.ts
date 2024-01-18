import typia from "typia";

import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { TupleRestObject } from "../../../structures/TupleRestObject";

export const test_json_createAssertStringify_TupleRestObject =
  _test_json_assertStringify("TupleRestObject")<TupleRestObject>(
    TupleRestObject,
  )((input: any): string => {
    const assert = (input: any): TupleRestObject => {
      const __is = (input: any): input is TupleRestObject => {
        const $io0 = (input: any): boolean => "string" === typeof input.value;
        return (
          Array.isArray(input) &&
          "boolean" === typeof input[0] &&
          "number" === typeof input[1] &&
          Number.isFinite(input[1]) &&
          Array.isArray(input.slice(2)) &&
          input
            .slice(2)
            .every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io0(elem),
            )
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is TupleRestObject => {
          // @ts-ignore;
          declare const require: (lib: string) => any;
          const $guard = require("typia/lib/functional/$guard").$guard(
            "typia.json.createAssertStringify",
          );
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            "string" === typeof input.value ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "string",
              value: input.value,
            });
          return (
            ((Array.isArray(input) ||
              $guard(true, {
                path: _path + "",
                expected: "TupleRestObject",
                value: input,
              })) &&
              ("boolean" === typeof input[0] ||
                $guard(true, {
                  path: _path + "[0]",
                  expected: "boolean",
                  value: input[0],
                })) &&
              (("number" === typeof input[1] && Number.isFinite(input[1])) ||
                $guard(true, {
                  path: _path + "[1]",
                  expected: "number",
                  value: input[1],
                })) &&
              (((Array.isArray(input.slice(2)) ||
                $guard(true, {
                  path: _path + "",
                  expected: "...TupleRestObject.IObject",
                  value: input.slice(2),
                })) &&
                input.slice(2).every(
                  (elem: any, _index1: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(true, {
                        path: _path + "[" + (2 + _index1) + "]",
                        expected: "TupleRestObject.IObject",
                        value: elem,
                      })) &&
                      $ao0(elem, _path + "[" + (2 + _index1) + "]", true)) ||
                    $guard(true, {
                      path: _path + "[" + (2 + _index1) + "]",
                      expected: "TupleRestObject.IObject",
                      value: elem,
                    }),
                )) ||
                $guard(true, {
                  path: _path + "",
                  expected: "...TupleRestObject.IObject",
                  value: input.slice(2),
                }))) ||
            $guard(true, {
              path: _path + "",
              expected: "TupleRestObject",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    };
    const stringify = (input: TupleRestObject): string => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $number = require("typia/lib/functional/$number").$number;
      const $string = require("typia/lib/functional/$string").$string;
      const $rest = require("typia/lib/functional/$rest").$rest;
      return `[${input[0]},${$number(input[1])}${$rest(
        `[${input
          .slice(2)
          .map((elem: any) => `{"value":${$string((elem as any).value)}}`)
          .join(",")}]`,
      )}]`;
    };
    return stringify(assert(input));
  });

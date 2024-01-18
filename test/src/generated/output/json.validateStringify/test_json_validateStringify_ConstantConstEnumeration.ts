import typia from "typia";

import { _test_json_validateStringify } from "../../../internal/_test_json_validateStringify";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_json_validateStringify_ConstantConstEnumeration =
  _test_json_validateStringify(
    "ConstantConstEnumeration",
  )<ConstantConstEnumeration>(ConstantConstEnumeration)((input) =>
    ((input: ConstantConstEnumeration): typia.IValidation<string> => {
      const validate = (
        input: any,
      ): typia.IValidation<ConstantConstEnumeration> => {
        const errors = [] as any[];
        const __is = (input: any): input is ConstantConstEnumeration => {
          return (
            Array.isArray(input) &&
            input.every(
              (elem: any) =>
                0 === elem ||
                1 === elem ||
                2 === elem ||
                "Three" === elem ||
                "Four" === elem,
            )
          );
        };
        if (false === __is(input)) {
          const $report = require("typia/lib/functional/$report").$report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ConstantConstEnumeration => {
            return (
              ((Array.isArray(input) ||
                $report(true, {
                  path: _path + "",
                  expected: "ConstantConstEnumeration",
                  value: input,
                })) &&
                input
                  .map(
                    (elem: any, _index1: number) =>
                      0 === elem ||
                      1 === elem ||
                      2 === elem ||
                      "Three" === elem ||
                      "Four" === elem ||
                      $report(true, {
                        path: _path + "[" + _index1 + "]",
                        expected: '("Four" | "Three" | 0 | 1 | 2)',
                        value: elem,
                      }),
                  )
                  .every((flag: boolean) => flag)) ||
              $report(true, {
                path: _path + "",
                expected: "ConstantConstEnumeration",
                value: input,
              })
            );
          })(input, "$input", true);
        }
        const success = 0 === errors.length;
        return {
          success,
          errors,
          data: success ? input : undefined,
        } as any;
      };
      const stringify = (input: ConstantConstEnumeration): string => {
        // @ts-ignore;
        declare const require: (lib: string) => any;
        const $string = require("typia/lib/functional/$string").$string;
        const $number = require("typia/lib/functional/$number").$number;
        const $throws = require("typia/lib/functional/$throws").$throws(
          "typia.json.validateStringify",
        );
        return `[${input
          .map((elem: any) =>
            (() => {
              if ("string" === typeof elem) return $string(elem);
              if ("number" === typeof elem) return $number(elem);
              if ("string" === typeof elem) return '"' + elem + '"';
              $throws({
                expected: '("Four" | "Three" | 0 | 1 | 2)',
                value: elem,
              });
            })(),
          )
          .join(",")}]`;
      };
      const output = validate(input) as any;
      if (output.success) output.data = stringify(input);
      return output;
    })(input),
  );

import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_notation_createValidateCamel_ConstantEnumeration =
  _test_notation_validateGeneral("ConstantEnumeration")<ConstantEnumeration>(
    ConstantEnumeration,
  )<typia.CamelCase<ConstantEnumeration>>({
    convert: (
      input: any,
    ): typia.IValidation<typia.CamelCase<ConstantEnumeration>> => {
      const validate = (input: any): typia.IValidation<ConstantEnumeration> => {
        const errors = [] as any[];
        const __is = (input: any): input is ConstantEnumeration => {
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
          ): input is ConstantEnumeration => {
            return (
              ((Array.isArray(input) ||
                $report(true, {
                  path: _path + "",
                  expected: "ConstantEnumeration",
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
                expected: "ConstantEnumeration",
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
      const general = (
        input: ConstantEnumeration,
      ): typia.CamelCase<ConstantEnumeration> => {
        const $cp0 = (input: any) => input.map((elem: any) => elem as any);
        return Array.isArray(input) ? $cp0(input) : (input as any);
      };
      const output = validate(input) as any;
      if (output.success) output.data = general(input);
      return output;
    },
    assert: (input: any): typia.CamelCase<ConstantEnumeration> => {
      const __is = (
        input: any,
      ): input is typia.CamelCase<ConstantEnumeration> => {
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
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.CamelCase<ConstantEnumeration> => {
          // @ts-ignore;
          declare const require: (lib: string) => any;
          const $guard = require("typia/lib/functional/$guard").$guard(
            "typia.createAssert",
          );
          return (
            ((Array.isArray(input) ||
              $guard(true, {
                path: _path + "",
                expected: "ConstantEnumeration",
                value: input,
              })) &&
              input.every(
                (elem: any, _index1: number) =>
                  0 === elem ||
                  1 === elem ||
                  2 === elem ||
                  "Three" === elem ||
                  "Four" === elem ||
                  $guard(true, {
                    path: _path + "[" + _index1 + "]",
                    expected: '("Four" | "Three" | 0 | 1 | 2)',
                    value: elem,
                  }),
              )) ||
            $guard(true, {
              path: _path + "",
              expected: "ConstantEnumeration",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    },
  });

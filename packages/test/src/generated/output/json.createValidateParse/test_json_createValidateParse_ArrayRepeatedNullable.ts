import typia from "typia";

import { _test_json_validateParse } from "../../../internal/_test_json_validateParse";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_json_createValidateParse_ArrayRepeatedNullable =
  _test_json_validateParse("ArrayRepeatedNullable")<ArrayRepeatedNullable>(
    ArrayRepeatedNullable,
  )(
    (
      input: string,
    ): typia.IValidation<typia.Primitive<ArrayRepeatedNullable>> => {
      const validate = (
        input: any,
      ): typia.IValidation<ArrayRepeatedNullable> => {
        const errors = [] as any[];
        const __is = (input: any): input is ArrayRepeatedNullable => {
          const $ia0 = (input: any): any =>
            input.every(
              (elem: any) =>
                undefined !== elem &&
                (null === elem ||
                  "string" === typeof elem ||
                  ("number" === typeof elem && Number.isFinite(elem)) ||
                  (Array.isArray(elem) && ($ia0(elem) || false))),
            );
          return (
            undefined !== input &&
            (null === input ||
              "string" === typeof input ||
              ("number" === typeof input && Number.isFinite(input)) ||
              (Array.isArray(input) && ($ia0(input) || false)))
          );
        };
        if (false === __is(input)) {
          const $report = (typia.json.createValidateParse as any).report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ArrayRepeatedNullable => {
            const $va0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): any =>
              input
                .map(
                  (elem: any, _index1: number) =>
                    (undefined !== elem ||
                      $report(_exceptionable, {
                        path: _path + "[" + _index1 + "]",
                        expected:
                          "(Array<ArrayRepeatedNullable> | null | number | string)",
                        value: elem,
                      })) &&
                    (null === elem ||
                      "string" === typeof elem ||
                      ("number" === typeof elem && Number.isFinite(elem)) ||
                      ((Array.isArray(elem) ||
                        $report(_exceptionable, {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "(Array<ArrayRepeatedNullable> | null | number | string)",
                          value: elem,
                        })) &&
                        ($va0(
                          elem,
                          _path + "[" + _index1 + "]",
                          true && _exceptionable,
                        ) ||
                          $report(_exceptionable, {
                            path: _path + "[" + _index1 + "]",
                            expected: "Array<ArrayRepeatedNullable>",
                            value: elem,
                          }))) ||
                      $report(_exceptionable, {
                        path: _path + "[" + _index1 + "]",
                        expected:
                          "(Array<ArrayRepeatedNullable> | null | number | string)",
                        value: elem,
                      })),
                )
                .every((flag: boolean) => flag);
            return (
              (undefined !== input ||
                $report(true, {
                  path: _path + "",
                  expected:
                    "(Array<ArrayRepeatedNullable> | null | number | string)",
                  value: input,
                })) &&
              (null === input ||
                "string" === typeof input ||
                ("number" === typeof input && Number.isFinite(input)) ||
                ((Array.isArray(input) ||
                  $report(true, {
                    path: _path + "",
                    expected:
                      "(Array<ArrayRepeatedNullable> | null | number | string)",
                    value: input,
                  })) &&
                  ($va0(input, _path + "", true && _exceptionable) ||
                    $report(_exceptionable, {
                      path: _path + "",
                      expected: "Array<ArrayRepeatedNullable>",
                      value: input,
                    }))) ||
                $report(true, {
                  path: _path + "",
                  expected:
                    "(Array<ArrayRepeatedNullable> | null | number | string)",
                  value: input,
                }))
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
      const output = JSON.parse(input);
      return validate(output) as any;
    },
  );

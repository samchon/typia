import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_notation_createValidateSnake_ArrayRepeatedNullable =
  _test_notation_validateGeneral(
    "ArrayRepeatedNullable",
  )<ArrayRepeatedNullable>(ArrayRepeatedNullable)<
    typia.SnakeCase<ArrayRepeatedNullable>
  >({
    convert: (
      input: any,
    ): typia.IValidation<typia.SnakeCase<ArrayRepeatedNullable>> => {
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
          const $report = (typia.notations.createValidateSnake as any).report(
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
      const general = (
        input: ArrayRepeatedNullable,
      ): typia.SnakeCase<ArrayRepeatedNullable> => {
        const $ia0 = (input: any): any =>
          input.every(
            (elem: any) =>
              undefined !== elem &&
              (null === elem ||
                "string" === typeof elem ||
                "number" === typeof elem ||
                (Array.isArray(elem) && ($ia0(elem) || false))),
          );
        const $cp0 = (input: any) => $ca0(input);
        const $ca0 = (input: any): any =>
          input.map((elem: any) =>
            Array.isArray(elem) ? $cp0(elem) : (elem as any),
          );
        return Array.isArray(input) ? $cp0(input) : (input as any);
      };
      const output = validate(input) as any;
      if (output.success) output.data = general(input);
      return output;
    },
    assert: (input: any): typia.SnakeCase<ArrayRepeatedNullable> => {
      const __is = (
        input: any,
      ): input is typia.SnakeCase<ArrayRepeatedNullable> => {
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
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.SnakeCase<ArrayRepeatedNullable> => {
          const $guard = (typia.createAssert as any).guard;
          const $aa0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): any =>
            input.every(
              (elem: any, _index1: number) =>
                (undefined !== elem ||
                  $guard(_exceptionable, {
                    path: _path + "[" + _index1 + "]",
                    expected:
                      "(Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 2 more ... | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | null | number | string)",
                    value: elem,
                  })) &&
                (null === elem ||
                  "string" === typeof elem ||
                  ("number" === typeof elem && Number.isFinite(elem)) ||
                  ((Array.isArray(elem) ||
                    $guard(_exceptionable, {
                      path: _path + "[" + _index1 + "]",
                      expected:
                        "(Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 2 more ... | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | null | number | string)",
                      value: elem,
                    })) &&
                    ($aa0(
                      elem,
                      _path + "[" + _index1 + "]",
                      true && _exceptionable,
                    ) ||
                      $guard(_exceptionable, {
                        path: _path + "[" + _index1 + "]",
                        expected:
                          "Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 2 more ... | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null>",
                        value: elem,
                      }))) ||
                  $guard(_exceptionable, {
                    path: _path + "[" + _index1 + "]",
                    expected:
                      "(Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 2 more ... | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | null | number | string)",
                    value: elem,
                  })),
            );
          return (
            (undefined !== input ||
              $guard(true, {
                path: _path + "",
                expected:
                  "(Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 2 more ... | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | null | number | string)",
                value: input,
              })) &&
            (null === input ||
              "string" === typeof input ||
              ("number" === typeof input && Number.isFinite(input)) ||
              ((Array.isArray(input) ||
                $guard(true, {
                  path: _path + "",
                  expected:
                    "(Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 2 more ... | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | null | number | string)",
                  value: input,
                })) &&
                ($aa0(input, _path + "", true && _exceptionable) ||
                  $guard(_exceptionable, {
                    path: _path + "",
                    expected:
                      "Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 2 more ... | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null>",
                    value: input,
                  }))) ||
              $guard(true, {
                path: _path + "",
                expected:
                  "(Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 2 more ... | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | null | number | string)",
                value: input,
              }))
          );
        })(input, "$input", true);
      return input;
    },
  });

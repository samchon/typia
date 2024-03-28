import typia from "typia";

import { _test_functional_validateFunction } from "../../../internal/_test_functional_validateFunction";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";

export const test_functional_validateFunction_ArrayRepeatedRequired =
  _test_functional_validateFunction("ArrayRepeatedRequired")(
    ArrayRepeatedRequired,
  )(
    (p: (input: ArrayRepeatedRequired) => ArrayRepeatedRequired) =>
      (
        input: ArrayRepeatedRequired,
      ): import("typia").IValidation<ArrayRepeatedRequired> => {
        const paramResults = [
          ((input: any): typia.IValidation<ArrayRepeatedRequired> => {
            const errors = [] as any[];
            const __is = (input: any): input is ArrayRepeatedRequired => {
              const $ia0 = (input: any): any =>
                input.every(
                  (elem: any) =>
                    null !== elem &&
                    undefined !== elem &&
                    ("string" === typeof elem ||
                      ("number" === typeof elem && Number.isFinite(elem)) ||
                      (Array.isArray(elem) && ($ia0(elem) || false))),
                );
              return (
                null !== input &&
                undefined !== input &&
                ("string" === typeof input ||
                  ("number" === typeof input && Number.isFinite(input)) ||
                  (Array.isArray(input) && ($ia0(input) || false)))
              );
            };
            if (false === __is(input)) {
              const $report = (typia.functional.validateFunction as any).report(
                errors,
              );
              ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): input is ArrayRepeatedRequired => {
                const $va0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): any =>
                  input
                    .map(
                      (elem: any, _index1: number) =>
                        (null !== elem ||
                          $report(_exceptionable, {
                            path: _path + "[" + _index1 + "]",
                            expected:
                              "(Array<ArrayRepeatedRequired> | number | string)",
                            value: elem,
                          })) &&
                        (undefined !== elem ||
                          $report(_exceptionable, {
                            path: _path + "[" + _index1 + "]",
                            expected:
                              "(Array<ArrayRepeatedRequired> | number | string)",
                            value: elem,
                          })) &&
                        ("string" === typeof elem ||
                          ("number" === typeof elem && Number.isFinite(elem)) ||
                          ((Array.isArray(elem) ||
                            $report(_exceptionable, {
                              path: _path + "[" + _index1 + "]",
                              expected:
                                "(Array<ArrayRepeatedRequired> | number | string)",
                              value: elem,
                            })) &&
                            ($va0(
                              elem,
                              _path + "[" + _index1 + "]",
                              true && _exceptionable,
                            ) ||
                              $report(_exceptionable, {
                                path: _path + "[" + _index1 + "]",
                                expected: "Array<ArrayRepeatedRequired>",
                                value: elem,
                              }))) ||
                          $report(_exceptionable, {
                            path: _path + "[" + _index1 + "]",
                            expected:
                              "(Array<ArrayRepeatedRequired> | number | string)",
                            value: elem,
                          })),
                    )
                    .every((flag: boolean) => flag);
                return (
                  (null !== input ||
                    $report(true, {
                      path: _path + "",
                      expected:
                        "(Array<ArrayRepeatedRequired> | number | string)",
                      value: input,
                    })) &&
                  (undefined !== input ||
                    $report(true, {
                      path: _path + "",
                      expected:
                        "(Array<ArrayRepeatedRequired> | number | string)",
                      value: input,
                    })) &&
                  ("string" === typeof input ||
                    ("number" === typeof input && Number.isFinite(input)) ||
                    ((Array.isArray(input) ||
                      $report(true, {
                        path: _path + "",
                        expected:
                          "(Array<ArrayRepeatedRequired> | number | string)",
                        value: input,
                      })) &&
                      ($va0(input, _path + "", true && _exceptionable) ||
                        $report(_exceptionable, {
                          path: _path + "",
                          expected: "Array<ArrayRepeatedRequired>",
                          value: input,
                        }))) ||
                    $report(true, {
                      path: _path + "",
                      expected:
                        "(Array<ArrayRepeatedRequired> | number | string)",
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
          })(input) as import("typia").IValidation.IFailure,
        ].filter((r: any) => false === r.success);
        if (paramResults.length > 0)
          return {
            success: false,
            errors: paramResults
              .map((r: any, i: any) =>
                r.errors.map((error: any) => ({
                  ...error,
                  path: error.path.replace("$input", `$input.parameters[${i}]`),
                })),
              )
              .flat(),
          };
        const result = ((
          input: any,
        ): typia.IValidation<ArrayRepeatedRequired> => {
          const errors = [] as any[];
          const __is = (input: any): input is ArrayRepeatedRequired => {
            const $ia0 = (input: any): any =>
              input.every(
                (elem: any) =>
                  null !== elem &&
                  undefined !== elem &&
                  ("string" === typeof elem ||
                    ("number" === typeof elem && Number.isFinite(elem)) ||
                    (Array.isArray(elem) && ($ia0(elem) || false))),
              );
            return (
              null !== input &&
              undefined !== input &&
              ("string" === typeof input ||
                ("number" === typeof input && Number.isFinite(input)) ||
                (Array.isArray(input) && ($ia0(input) || false)))
            );
          };
          if (false === __is(input)) {
            const $report = (typia.functional.validateFunction as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ArrayRepeatedRequired => {
              const $va0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): any =>
                input
                  .map(
                    (elem: any, _index1: number) =>
                      (null !== elem ||
                        $report(_exceptionable, {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "(Array<ArrayRepeatedRequired> | number | string)",
                          value: elem,
                        })) &&
                      (undefined !== elem ||
                        $report(_exceptionable, {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "(Array<ArrayRepeatedRequired> | number | string)",
                          value: elem,
                        })) &&
                      ("string" === typeof elem ||
                        ("number" === typeof elem && Number.isFinite(elem)) ||
                        ((Array.isArray(elem) ||
                          $report(_exceptionable, {
                            path: _path + "[" + _index1 + "]",
                            expected:
                              "(Array<ArrayRepeatedRequired> | number | string)",
                            value: elem,
                          })) &&
                          ($va0(
                            elem,
                            _path + "[" + _index1 + "]",
                            true && _exceptionable,
                          ) ||
                            $report(_exceptionable, {
                              path: _path + "[" + _index1 + "]",
                              expected: "Array<ArrayRepeatedRequired>",
                              value: elem,
                            }))) ||
                        $report(_exceptionable, {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "(Array<ArrayRepeatedRequired> | number | string)",
                          value: elem,
                        })),
                  )
                  .every((flag: boolean) => flag);
              return (
                (null !== input ||
                  $report(true, {
                    path: _path + "",
                    expected:
                      "(Array<ArrayRepeatedRequired> | number | string)",
                    value: input,
                  })) &&
                (undefined !== input ||
                  $report(true, {
                    path: _path + "",
                    expected:
                      "(Array<ArrayRepeatedRequired> | number | string)",
                    value: input,
                  })) &&
                ("string" === typeof input ||
                  ("number" === typeof input && Number.isFinite(input)) ||
                  ((Array.isArray(input) ||
                    $report(true, {
                      path: _path + "",
                      expected:
                        "(Array<ArrayRepeatedRequired> | number | string)",
                      value: input,
                    })) &&
                    ($va0(input, _path + "", true && _exceptionable) ||
                      $report(_exceptionable, {
                        path: _path + "",
                        expected: "Array<ArrayRepeatedRequired>",
                        value: input,
                      }))) ||
                  $report(true, {
                    path: _path + "",
                    expected:
                      "(Array<ArrayRepeatedRequired> | number | string)",
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
        })(p(input));
        if (!result.success)
          result.errors = result.errors.map((error: any) => ({
            ...error,
            path: error.path.replace("$input", "$input.return"),
          }));
        return result;
      },
  );

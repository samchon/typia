import typia from "typia";

import { _test_functional_validateFunction } from "../../../internal/_test_functional_validateFunction";
import { TupleOptional } from "../../../structures/TupleOptional";

export const test_functional_validateFunction_TupleOptional =
  _test_functional_validateFunction("TupleOptional")(TupleOptional)(
    (p: (input: TupleOptional) => TupleOptional) =>
      (input: TupleOptional): import("typia").IValidation<TupleOptional> => {
        const paramResults = [
          ((input: any): typia.IValidation<TupleOptional> => {
            const errors = [] as any[];
            const __is = (input: any): input is TupleOptional => {
              return (
                Array.isArray(input) &&
                input.every(
                  (elem: any) =>
                    Array.isArray(elem) &&
                    3 <= elem.length &&
                    5 >= elem.length &&
                    "number" === typeof elem[0] &&
                    Number.isFinite(elem[0]) &&
                    "boolean" === typeof elem[1] &&
                    "string" === typeof elem[2] &&
                    (null === elem[3] ||
                      undefined === elem[3] ||
                      ("number" === typeof elem[3] &&
                        Number.isFinite(elem[3]))) &&
                    (null === elem[4] ||
                      undefined === elem[4] ||
                      "string" === typeof elem[4]),
                )
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
              ): input is TupleOptional => {
                return (
                  ((Array.isArray(input) ||
                    $report(true, {
                      path: _path + "",
                      expected: "TupleOptional",
                      value: input,
                    })) &&
                    input
                      .map(
                        (elem: any, _index1: number) =>
                          ((Array.isArray(elem) ||
                            $report(true, {
                              path: _path + "[" + _index1 + "]",
                              expected:
                                "[number, boolean, string, (number | null | undefined)?, (string | null | undefined)?]",
                              value: elem,
                            })) &&
                            ((3 <= elem.length && 5 >= elem.length) ||
                              $report(true, {
                                path: _path + "[" + _index1 + "]",
                                expected:
                                  "[number, boolean, string, (null | number | undefined), (null | string | undefined)]",
                                value: elem,
                              })) &&
                            [
                              ("number" === typeof elem[0] &&
                                Number.isFinite(elem[0])) ||
                                $report(true, {
                                  path: _path + "[" + _index1 + "][0]",
                                  expected: "number",
                                  value: elem[0],
                                }),
                              "boolean" === typeof elem[1] ||
                                $report(true, {
                                  path: _path + "[" + _index1 + "][1]",
                                  expected: "boolean",
                                  value: elem[1],
                                }),
                              "string" === typeof elem[2] ||
                                $report(true, {
                                  path: _path + "[" + _index1 + "][2]",
                                  expected: "string",
                                  value: elem[2],
                                }),
                              null === elem[3] ||
                                undefined === elem[3] ||
                                ("number" === typeof elem[3] &&
                                  Number.isFinite(elem[3])) ||
                                $report(true, {
                                  path: _path + "[" + _index1 + "][3]",
                                  expected: "(null | number | undefined)",
                                  value: elem[3],
                                }),
                              null === elem[4] ||
                                undefined === elem[4] ||
                                "string" === typeof elem[4] ||
                                $report(true, {
                                  path: _path + "[" + _index1 + "][4]",
                                  expected: "(null | string | undefined)",
                                  value: elem[4],
                                }),
                            ].every((flag: boolean) => flag)) ||
                          $report(true, {
                            path: _path + "[" + _index1 + "]",
                            expected:
                              "[number, boolean, string, (number | null | undefined)?, (string | null | undefined)?]",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "TupleOptional",
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
        const result = ((input: any): typia.IValidation<TupleOptional> => {
          const errors = [] as any[];
          const __is = (input: any): input is TupleOptional => {
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any) =>
                  Array.isArray(elem) &&
                  3 <= elem.length &&
                  5 >= elem.length &&
                  "number" === typeof elem[0] &&
                  Number.isFinite(elem[0]) &&
                  "boolean" === typeof elem[1] &&
                  "string" === typeof elem[2] &&
                  (null === elem[3] ||
                    undefined === elem[3] ||
                    ("number" === typeof elem[3] &&
                      Number.isFinite(elem[3]))) &&
                  (null === elem[4] ||
                    undefined === elem[4] ||
                    "string" === typeof elem[4]),
              )
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
            ): input is TupleOptional => {
              return (
                ((Array.isArray(input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "TupleOptional",
                    value: input,
                  })) &&
                  input
                    .map(
                      (elem: any, _index1: number) =>
                        ((Array.isArray(elem) ||
                          $report(true, {
                            path: _path + "[" + _index1 + "]",
                            expected:
                              "[number, boolean, string, (number | null | undefined)?, (string | null | undefined)?]",
                            value: elem,
                          })) &&
                          ((3 <= elem.length && 5 >= elem.length) ||
                            $report(true, {
                              path: _path + "[" + _index1 + "]",
                              expected:
                                "[number, boolean, string, (null | number | undefined), (null | string | undefined)]",
                              value: elem,
                            })) &&
                          [
                            ("number" === typeof elem[0] &&
                              Number.isFinite(elem[0])) ||
                              $report(true, {
                                path: _path + "[" + _index1 + "][0]",
                                expected: "number",
                                value: elem[0],
                              }),
                            "boolean" === typeof elem[1] ||
                              $report(true, {
                                path: _path + "[" + _index1 + "][1]",
                                expected: "boolean",
                                value: elem[1],
                              }),
                            "string" === typeof elem[2] ||
                              $report(true, {
                                path: _path + "[" + _index1 + "][2]",
                                expected: "string",
                                value: elem[2],
                              }),
                            null === elem[3] ||
                              undefined === elem[3] ||
                              ("number" === typeof elem[3] &&
                                Number.isFinite(elem[3])) ||
                              $report(true, {
                                path: _path + "[" + _index1 + "][3]",
                                expected: "(null | number | undefined)",
                                value: elem[3],
                              }),
                            null === elem[4] ||
                              undefined === elem[4] ||
                              "string" === typeof elem[4] ||
                              $report(true, {
                                path: _path + "[" + _index1 + "][4]",
                                expected: "(null | string | undefined)",
                                value: elem[4],
                              }),
                          ].every((flag: boolean) => flag)) ||
                        $report(true, {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "[number, boolean, string, (number | null | undefined)?, (string | null | undefined)?]",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                $report(true, {
                  path: _path + "",
                  expected: "TupleOptional",
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
        })(p(input));
        if (!result.success)
          result.errors = result.errors.map((error: any) => ({
            ...error,
            path: error.path.replace("$input", "$input.return"),
          }));
        return result;
      },
  );

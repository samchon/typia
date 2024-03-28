import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../../internal/_test_functional_validateEqualsParametersAsync";
import { TupleUnion } from "../../../structures/TupleUnion";

export const test_functional_validateEqualsParametersAsync_TupleUnion =
  _test_functional_validateEqualsParametersAsync("TupleUnion")(TupleUnion)(
    (p: (input: TupleUnion) => Promise<TupleUnion>) =>
      async (
        input: TupleUnion,
      ): Promise<import("typia").IValidation<TupleUnion>> => {
        const paramResults = [
          ((input: any): typia.IValidation<TupleUnion> => {
            const errors = [] as any[];
            const __is = (
              input: any,
              _exceptionable: boolean = true,
            ): input is TupleUnion => {
              const $ip0 = (input: any, _exceptionable: boolean = true) => {
                const array = input;
                const tuplePredicators = [
                  [
                    (top: any[]): any =>
                      top.length === 3 &&
                      "number" === typeof top[0] &&
                      Number.isFinite(top[0]) &&
                      "string" === typeof top[1] &&
                      "boolean" === typeof top[2],
                    (entire: any[]): any =>
                      entire.length === 3 &&
                      "number" === typeof entire[0] &&
                      Number.isFinite(entire[0]) &&
                      "string" === typeof entire[1] &&
                      "boolean" === typeof entire[2],
                  ] as const,
                  [
                    (top: any[]): any =>
                      top.length === 2 &&
                      "boolean" === typeof top[0] &&
                      "number" === typeof top[1] &&
                      Number.isFinite(top[1]),
                    (entire: any[]): any =>
                      entire.length === 2 &&
                      "boolean" === typeof entire[0] &&
                      "number" === typeof entire[1] &&
                      Number.isFinite(entire[1]),
                  ] as const,
                  [
                    (top: any[]): any => top.length === 0,
                    (entire: any[]): any => entire.length === 0,
                  ] as const,
                ];
                for (const pred of tuplePredicators)
                  if (pred[0](array)) return pred[1](array);
                return false;
              };
              return (
                Array.isArray(input) &&
                input.every(
                  (elem: any, _index1: number) =>
                    Array.isArray(elem) &&
                    ($ip0(elem, true && _exceptionable) || false),
                )
              );
            };
            if (false === __is(input)) {
              const $report = (
                typia.functional.validateEqualsParameters as any
              ).report(errors);
              ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): input is TupleUnion => {
                const $vp0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ) => {
                  const array = input;
                  const tuplePredicators = [
                    [
                      (top: any[]): any =>
                        top.length === 3 &&
                        [
                          "number" === typeof top[0] && Number.isFinite(top[0]),
                          "string" === typeof top[1],
                          "boolean" === typeof top[2],
                        ].every((flag: boolean) => flag),
                      (entire: any[]): any =>
                        (entire.length === 3 ||
                          $report(_exceptionable, {
                            path: _path,
                            expected: "[number, string, boolean]",
                            value: entire,
                          })) &&
                        [
                          ("number" === typeof entire[0] &&
                            Number.isFinite(entire[0])) ||
                            $report(_exceptionable, {
                              path: _path + "[0]",
                              expected: "number",
                              value: entire[0],
                            }),
                          "string" === typeof entire[1] ||
                            $report(_exceptionable, {
                              path: _path + "[1]",
                              expected: "string",
                              value: entire[1],
                            }),
                          "boolean" === typeof entire[2] ||
                            $report(_exceptionable, {
                              path: _path + "[2]",
                              expected: "boolean",
                              value: entire[2],
                            }),
                        ].every((flag: boolean) => flag),
                    ] as const,
                    [
                      (top: any[]): any =>
                        top.length === 2 &&
                        [
                          "boolean" === typeof top[0],
                          "number" === typeof top[1] && Number.isFinite(top[1]),
                        ].every((flag: boolean) => flag),
                      (entire: any[]): any =>
                        (entire.length === 2 ||
                          $report(_exceptionable, {
                            path: _path,
                            expected: "[boolean, number]",
                            value: entire,
                          })) &&
                        [
                          "boolean" === typeof entire[0] ||
                            $report(_exceptionable, {
                              path: _path + "[0]",
                              expected: "boolean",
                              value: entire[0],
                            }),
                          ("number" === typeof entire[1] &&
                            Number.isFinite(entire[1])) ||
                            $report(_exceptionable, {
                              path: _path + "[1]",
                              expected: "number",
                              value: entire[1],
                            }),
                        ].every((flag: boolean) => flag),
                    ] as const,
                    [
                      (top: any[]): any =>
                        top.length === 0 && [].every((flag: boolean) => flag),
                      (entire: any[]): any =>
                        (entire.length === 0 ||
                          $report(_exceptionable, {
                            path: _path,
                            expected: "[]",
                            value: entire,
                          })) &&
                        [].every((flag: boolean) => flag),
                    ] as const,
                  ];
                  for (const pred of tuplePredicators)
                    if (pred[0](array)) return pred[1](array);
                  return $report(_exceptionable, {
                    path: _path,
                    expected:
                      "([number, string, boolean] | [boolean, number] | [])",
                    value: input,
                  });
                };
                return (
                  ((Array.isArray(input) ||
                    $report(true, {
                      path: _path + "",
                      expected: "TupleUnion",
                      value: input,
                    })) &&
                    input
                      .map(
                        (elem: any, _index1: number) =>
                          ((Array.isArray(elem) ||
                            $report(true, {
                              path: _path + "[" + _index1 + "]",
                              expected:
                                "([] | [boolean, number] | [number, string, boolean])",
                              value: elem,
                            })) &&
                            ($vp0(
                              elem,
                              _path + "[" + _index1 + "]",
                              true && _exceptionable,
                            ) ||
                              $report(_exceptionable, {
                                path: _path + "[" + _index1 + "]",
                                expected:
                                  "[number, string, boolean] | [boolean, number] | []",
                                value: elem,
                              }))) ||
                          $report(true, {
                            path: _path + "[" + _index1 + "]",
                            expected:
                              "([] | [boolean, number] | [number, string, boolean])",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "TupleUnion",
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
        return {
          success: true,
          data: await p(input),
          errors: [],
        };
      },
  );

import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../../internal/_test_functional_validateEqualsFunction";
import { CommentTagBigInt } from "../../../structures/CommentTagBigInt";

export const test_functional_validateEqualsFunction_CommentTagBigInt =
  _test_functional_validateEqualsFunction("CommentTagBigInt")(CommentTagBigInt)(
    (p: (input: CommentTagBigInt) => CommentTagBigInt) =>
      (
        input: CommentTagBigInt,
      ): import("typia").IValidation<CommentTagBigInt> => {
        const paramResults = [
          ((input: any): typia.IValidation<CommentTagBigInt> => {
            const errors = [] as any[];
            const __is = (
              input: any,
              _exceptionable: boolean = true,
            ): input is CommentTagBigInt => {
              const $io0 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
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
                      [
                        "value",
                        "ranged",
                        "minimum",
                        "maximum",
                        "multipleOf",
                      ].some((prop: any) => key === prop)
                    )
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                  }));
              return (
                "object" === typeof input && null !== input && $io0(input, true)
              );
            };
            if (false === __is(input)) {
              const $report = (
                typia.functional.validateEqualsFunction as any
              ).report(errors);
              ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): input is CommentTagBigInt => {
                const $join = (typia.functional.validateEqualsFunction as any)
                  .join;
                const $vo0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    "bigint" === typeof input.value ||
                      $report(_exceptionable, {
                        path: _path + ".value",
                        expected: "bigint",
                        value: input.value,
                      }),
                    ("bigint" === typeof input.ranged &&
                      (0 <= input.ranged ||
                        $report(_exceptionable, {
                          path: _path + ".ranged",
                          expected: "bigint & Minimum<0n>",
                          value: input.ranged,
                        })) &&
                      (input.ranged <= 100 ||
                        $report(_exceptionable, {
                          path: _path + ".ranged",
                          expected: "bigint & Maximum<100n>",
                          value: input.ranged,
                        }))) ||
                      $report(_exceptionable, {
                        path: _path + ".ranged",
                        expected: "(bigint & Minimum<0n> & Maximum<100n>)",
                        value: input.ranged,
                      }),
                    ("bigint" === typeof input.minimum &&
                      (0 <= input.minimum ||
                        $report(_exceptionable, {
                          path: _path + ".minimum",
                          expected: "bigint & Minimum<0n>",
                          value: input.minimum,
                        }))) ||
                      $report(_exceptionable, {
                        path: _path + ".minimum",
                        expected: "(bigint & Minimum<0n>)",
                        value: input.minimum,
                      }),
                    ("bigint" === typeof input.maximum &&
                      (input.maximum <= 100 ||
                        $report(_exceptionable, {
                          path: _path + ".maximum",
                          expected: "bigint & Maximum<100n>",
                          value: input.maximum,
                        }))) ||
                      $report(_exceptionable, {
                        path: _path + ".maximum",
                        expected: "(bigint & Maximum<100n>)",
                        value: input.maximum,
                      }),
                    ("bigint" === typeof input.multipleOf &&
                      (input.multipleOf % 3n === 0n ||
                        $report(_exceptionable, {
                          path: _path + ".multipleOf",
                          expected: "bigint & MultipleOf<3n>",
                          value: input.multipleOf,
                        }))) ||
                      $report(_exceptionable, {
                        path: _path + ".multipleOf",
                        expected: "(bigint & MultipleOf<3n>)",
                        value: input.multipleOf,
                      }),
                    5 === Object.keys(input).length ||
                      false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (
                            [
                              "value",
                              "ranged",
                              "minimum",
                              "maximum",
                              "multipleOf",
                            ].some((prop: any) => key === prop)
                          )
                            return true;
                          const value = input[key];
                          if (undefined === value) return true;
                          return $report(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                          });
                        })
                        .every((flag: boolean) => flag),
                  ].every((flag: boolean) => flag);
                return (
                  ((("object" === typeof input && null !== input) ||
                    $report(true, {
                      path: _path + "",
                      expected: "CommentTagBigInt",
                      value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "CommentTagBigInt",
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
        const result = ((input: any): typia.IValidation<CommentTagBigInt> => {
          const errors = [] as any[];
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is CommentTagBigInt => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
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
                    [
                      "value",
                      "ranged",
                      "minimum",
                      "maximum",
                      "multipleOf",
                    ].some((prop: any) => key === prop)
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            return (
              "object" === typeof input && null !== input && $io0(input, true)
            );
          };
          if (false === __is(input)) {
            const $report = (
              typia.functional.validateEqualsFunction as any
            ).report(errors);
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is CommentTagBigInt => {
              const $join = (typia.functional.validateEqualsFunction as any)
                .join;
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "bigint" === typeof input.value ||
                    $report(_exceptionable, {
                      path: _path + ".value",
                      expected: "bigint",
                      value: input.value,
                    }),
                  ("bigint" === typeof input.ranged &&
                    (0 <= input.ranged ||
                      $report(_exceptionable, {
                        path: _path + ".ranged",
                        expected: "bigint & Minimum<0n>",
                        value: input.ranged,
                      })) &&
                    (input.ranged <= 100 ||
                      $report(_exceptionable, {
                        path: _path + ".ranged",
                        expected: "bigint & Maximum<100n>",
                        value: input.ranged,
                      }))) ||
                    $report(_exceptionable, {
                      path: _path + ".ranged",
                      expected: "(bigint & Minimum<0n> & Maximum<100n>)",
                      value: input.ranged,
                    }),
                  ("bigint" === typeof input.minimum &&
                    (0 <= input.minimum ||
                      $report(_exceptionable, {
                        path: _path + ".minimum",
                        expected: "bigint & Minimum<0n>",
                        value: input.minimum,
                      }))) ||
                    $report(_exceptionable, {
                      path: _path + ".minimum",
                      expected: "(bigint & Minimum<0n>)",
                      value: input.minimum,
                    }),
                  ("bigint" === typeof input.maximum &&
                    (input.maximum <= 100 ||
                      $report(_exceptionable, {
                        path: _path + ".maximum",
                        expected: "bigint & Maximum<100n>",
                        value: input.maximum,
                      }))) ||
                    $report(_exceptionable, {
                      path: _path + ".maximum",
                      expected: "(bigint & Maximum<100n>)",
                      value: input.maximum,
                    }),
                  ("bigint" === typeof input.multipleOf &&
                    (input.multipleOf % 3n === 0n ||
                      $report(_exceptionable, {
                        path: _path + ".multipleOf",
                        expected: "bigint & MultipleOf<3n>",
                        value: input.multipleOf,
                      }))) ||
                    $report(_exceptionable, {
                      path: _path + ".multipleOf",
                      expected: "(bigint & MultipleOf<3n>)",
                      value: input.multipleOf,
                    }),
                  5 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input)
                      .map((key: any) => {
                        if (
                          [
                            "value",
                            "ranged",
                            "minimum",
                            "maximum",
                            "multipleOf",
                          ].some((prop: any) => key === prop)
                        )
                          return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return $report(_exceptionable, {
                          path: _path + $join(key),
                          expected: "undefined",
                          value: value,
                        });
                      })
                      .every((flag: boolean) => flag),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "CommentTagBigInt",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "CommentTagBigInt",
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

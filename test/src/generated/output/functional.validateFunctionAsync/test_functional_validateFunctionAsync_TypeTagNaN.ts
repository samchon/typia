import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../../internal/_test_functional_validateFunctionAsync";
import { TypeTagNaN } from "../../../structures/TypeTagNaN";

export const test_functional_validateFunctionAsync_TypeTagNaN =
  _test_functional_validateFunctionAsync("TypeTagNaN")(TypeTagNaN)(
    (p: (input: TypeTagNaN) => Promise<TypeTagNaN>) =>
      async (
        input: TypeTagNaN,
      ): Promise<import("typia").IValidation<TypeTagNaN>> => {
        const paramResults = [
          ((input: any): typia.IValidation<TypeTagNaN> => {
            const errors = [] as any[];
            const __is = (input: any): input is TypeTagNaN => {
              return (
                "object" === typeof input &&
                null !== input &&
                "number" === typeof (input as any).value &&
                Number.isFinite((input as any).value) &&
                "number" === typeof (input as any).ranged &&
                0 <= (input as any).ranged &&
                (input as any).ranged <= 100 &&
                "number" === typeof (input as any).minimum &&
                Number.isFinite((input as any).minimum) &&
                0 <= (input as any).minimum &&
                "number" === typeof (input as any).maximum &&
                Number.isFinite((input as any).maximum) &&
                (input as any).maximum <= 100 &&
                "number" === typeof (input as any).multipleOf &&
                (input as any).multipleOf % 3 === 0 &&
                "number" === typeof (input as any).typed &&
                Math.floor((input as any).typed) === (input as any).typed &&
                -2147483648 <= (input as any).typed &&
                (input as any).typed <= 2147483647
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
              ): input is TypeTagNaN => {
                const $vo0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    ("number" === typeof input.value &&
                      Number.isFinite(input.value)) ||
                      $report(_exceptionable, {
                        path: _path + ".value",
                        expected: "number",
                        value: input.value,
                      }),
                    ("number" === typeof input.ranged &&
                      (0 <= input.ranged ||
                        $report(_exceptionable, {
                          path: _path + ".ranged",
                          expected: "number & Minimum<0>",
                          value: input.ranged,
                        })) &&
                      (input.ranged <= 100 ||
                        $report(_exceptionable, {
                          path: _path + ".ranged",
                          expected: "number & Maximum<100>",
                          value: input.ranged,
                        }))) ||
                      $report(_exceptionable, {
                        path: _path + ".ranged",
                        expected: "(number & Minimum<0> & Maximum<100>)",
                        value: input.ranged,
                      }),
                    ("number" === typeof input.minimum &&
                      (Number.isFinite(input.minimum) ||
                        $report(_exceptionable, {
                          path: _path + ".minimum",
                          expected: "number",
                          value: input.minimum,
                        })) &&
                      (0 <= input.minimum ||
                        $report(_exceptionable, {
                          path: _path + ".minimum",
                          expected: "number & Minimum<0>",
                          value: input.minimum,
                        }))) ||
                      $report(_exceptionable, {
                        path: _path + ".minimum",
                        expected: "(number & Minimum<0>)",
                        value: input.minimum,
                      }),
                    ("number" === typeof input.maximum &&
                      (Number.isFinite(input.maximum) ||
                        $report(_exceptionable, {
                          path: _path + ".maximum",
                          expected: "number",
                          value: input.maximum,
                        })) &&
                      (input.maximum <= 100 ||
                        $report(_exceptionable, {
                          path: _path + ".maximum",
                          expected: "number & Maximum<100>",
                          value: input.maximum,
                        }))) ||
                      $report(_exceptionable, {
                        path: _path + ".maximum",
                        expected: "(number & Maximum<100>)",
                        value: input.maximum,
                      }),
                    ("number" === typeof input.multipleOf &&
                      (input.multipleOf % 3 === 0 ||
                        $report(_exceptionable, {
                          path: _path + ".multipleOf",
                          expected: "number & MultipleOf<3>",
                          value: input.multipleOf,
                        }))) ||
                      $report(_exceptionable, {
                        path: _path + ".multipleOf",
                        expected: "(number & MultipleOf<3>)",
                        value: input.multipleOf,
                      }),
                    ("number" === typeof input.typed &&
                      ((Math.floor(input.typed) === input.typed &&
                        -2147483648 <= input.typed &&
                        input.typed <= 2147483647) ||
                        $report(_exceptionable, {
                          path: _path + ".typed",
                          expected: 'number & Type<"int32">',
                          value: input.typed,
                        }))) ||
                      $report(_exceptionable, {
                        path: _path + ".typed",
                        expected: '(number & Type<"int32">)',
                        value: input.typed,
                      }),
                  ].every((flag: boolean) => flag);
                return (
                  ((("object" === typeof input && null !== input) ||
                    $report(true, {
                      path: _path + "",
                      expected: "TypeTagNaN",
                      value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "TypeTagNaN",
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
        const result = ((input: any): typia.IValidation<TypeTagNaN> => {
          const errors = [] as any[];
          const __is = (input: any): input is TypeTagNaN => {
            return (
              "object" === typeof input &&
              null !== input &&
              "number" === typeof (input as any).value &&
              Number.isFinite((input as any).value) &&
              "number" === typeof (input as any).ranged &&
              0 <= (input as any).ranged &&
              (input as any).ranged <= 100 &&
              "number" === typeof (input as any).minimum &&
              Number.isFinite((input as any).minimum) &&
              0 <= (input as any).minimum &&
              "number" === typeof (input as any).maximum &&
              Number.isFinite((input as any).maximum) &&
              (input as any).maximum <= 100 &&
              "number" === typeof (input as any).multipleOf &&
              (input as any).multipleOf % 3 === 0 &&
              "number" === typeof (input as any).typed &&
              Math.floor((input as any).typed) === (input as any).typed &&
              -2147483648 <= (input as any).typed &&
              (input as any).typed <= 2147483647
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
            ): input is TypeTagNaN => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ("number" === typeof input.value &&
                    Number.isFinite(input.value)) ||
                    $report(_exceptionable, {
                      path: _path + ".value",
                      expected: "number",
                      value: input.value,
                    }),
                  ("number" === typeof input.ranged &&
                    (0 <= input.ranged ||
                      $report(_exceptionable, {
                        path: _path + ".ranged",
                        expected: "number & Minimum<0>",
                        value: input.ranged,
                      })) &&
                    (input.ranged <= 100 ||
                      $report(_exceptionable, {
                        path: _path + ".ranged",
                        expected: "number & Maximum<100>",
                        value: input.ranged,
                      }))) ||
                    $report(_exceptionable, {
                      path: _path + ".ranged",
                      expected: "(number & Minimum<0> & Maximum<100>)",
                      value: input.ranged,
                    }),
                  ("number" === typeof input.minimum &&
                    (Number.isFinite(input.minimum) ||
                      $report(_exceptionable, {
                        path: _path + ".minimum",
                        expected: "number",
                        value: input.minimum,
                      })) &&
                    (0 <= input.minimum ||
                      $report(_exceptionable, {
                        path: _path + ".minimum",
                        expected: "number & Minimum<0>",
                        value: input.minimum,
                      }))) ||
                    $report(_exceptionable, {
                      path: _path + ".minimum",
                      expected: "(number & Minimum<0>)",
                      value: input.minimum,
                    }),
                  ("number" === typeof input.maximum &&
                    (Number.isFinite(input.maximum) ||
                      $report(_exceptionable, {
                        path: _path + ".maximum",
                        expected: "number",
                        value: input.maximum,
                      })) &&
                    (input.maximum <= 100 ||
                      $report(_exceptionable, {
                        path: _path + ".maximum",
                        expected: "number & Maximum<100>",
                        value: input.maximum,
                      }))) ||
                    $report(_exceptionable, {
                      path: _path + ".maximum",
                      expected: "(number & Maximum<100>)",
                      value: input.maximum,
                    }),
                  ("number" === typeof input.multipleOf &&
                    (input.multipleOf % 3 === 0 ||
                      $report(_exceptionable, {
                        path: _path + ".multipleOf",
                        expected: "number & MultipleOf<3>",
                        value: input.multipleOf,
                      }))) ||
                    $report(_exceptionable, {
                      path: _path + ".multipleOf",
                      expected: "(number & MultipleOf<3>)",
                      value: input.multipleOf,
                    }),
                  ("number" === typeof input.typed &&
                    ((Math.floor(input.typed) === input.typed &&
                      -2147483648 <= input.typed &&
                      input.typed <= 2147483647) ||
                      $report(_exceptionable, {
                        path: _path + ".typed",
                        expected: 'number & Type<"int32">',
                        value: input.typed,
                      }))) ||
                    $report(_exceptionable, {
                      path: _path + ".typed",
                      expected: '(number & Type<"int32">)',
                      value: input.typed,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "TypeTagNaN",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "TypeTagNaN",
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
        })(await p(input));
        if (!result.success)
          result.errors = result.errors.map((error: any) => ({
            ...error,
            path: error.path.replace("$input", "$input.return"),
          }));
        return result;
      },
  );

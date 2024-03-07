import typia from "typia";
import { _test_functional_validateEqualsParameters } from "../../../internal/_test_functional_validateEqualsParameters";
import { CommentTagInfinite } from "../../../structures/CommentTagInfinite";
export const test_functional_validateEqualsParameters_CommentTagInfinite =
  _test_functional_validateEqualsParameters("CommentTagInfinite")(
    CommentTagInfinite,
  )(
    (p: (input: CommentTagInfinite) => CommentTagInfinite) =>
      (
        input: CommentTagInfinite,
      ): import("typia").IValidation<CommentTagInfinite> => {
        const paramResults = [
          ((input: any): typia.IValidation<CommentTagInfinite> => {
            const errors = [] as any[];
            const __is = (
              input: any,
              _exceptionable: boolean = true,
            ): input is CommentTagInfinite => {
              const $io0 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
                "number" === typeof input.value &&
                Number.isFinite(input.value) &&
                "number" === typeof input.ranged &&
                0 <= input.ranged &&
                input.ranged <= 100 &&
                "number" === typeof input.minimum &&
                Number.isFinite(input.minimum) &&
                0 <= input.minimum &&
                "number" === typeof input.maximum &&
                Number.isFinite(input.maximum) &&
                input.maximum <= 100 &&
                "number" === typeof input.multipleOf &&
                input.multipleOf % 3 === 0 &&
                "number" === typeof input.typed &&
                Math.floor(input.typed) === input.typed &&
                -2147483648 <= input.typed &&
                input.typed <= 2147483647 &&
                (6 === Object.keys(input).length ||
                  Object.keys(input).every((key: any) => {
                    if (
                      [
                        "value",
                        "ranged",
                        "minimum",
                        "maximum",
                        "multipleOf",
                        "typed",
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
                typia.functional.validateEqualsParameters as any
              ).report(errors);
              ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): input is CommentTagInfinite => {
                const $join = (typia.functional.validateEqualsParameters as any)
                  .join;
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
                    6 === Object.keys(input).length ||
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
                              "typed",
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
                      expected: "CommentTagInfinite",
                      value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "CommentTagInfinite",
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
          data: p(input),
          errors: [],
        };
      },
  );

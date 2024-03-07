import typia from "typia";
import { _test_functional_validateEqualsParametersAsync } from "../../../internal/_test_functional_validateEqualsParametersAsync";
import { TypeTagRangeBigInt } from "../../../structures/TypeTagRangeBigInt";
export const test_functional_validateEqualsParametersAsync_TypeTagRangeBigInt =
  _test_functional_validateEqualsParametersAsync("TypeTagRangeBigInt")(
    TypeTagRangeBigInt,
  )(
    (p: (input: TypeTagRangeBigInt) => Promise<TypeTagRangeBigInt>) =>
      async (
        input: TypeTagRangeBigInt,
      ): Promise<import("typia").IValidation<TypeTagRangeBigInt>> => {
        const paramResults = [
          ((input: any): typia.IValidation<TypeTagRangeBigInt> => {
            const errors = [] as any[];
            const __is = (
              input: any,
              _exceptionable: boolean = true,
            ): input is TypeTagRangeBigInt => {
              const $io0 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
                Array.isArray(input.value) &&
                input.value.every(
                  (elem: any, _index1: number) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    $io1(elem, true && _exceptionable),
                ) &&
                (1 === Object.keys(input).length ||
                  Object.keys(input).every((key: any) => {
                    if (["value"].some((prop: any) => key === prop))
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                  }));
              const $io1 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
                "bigint" === typeof input.greater &&
                BigInt(3) < input.greater &&
                "bigint" === typeof input.greater_equal &&
                BigInt(3) <= input.greater_equal &&
                "bigint" === typeof input.less &&
                input.less < BigInt(7) &&
                "bigint" === typeof input.less_equal &&
                input.less_equal <= BigInt(7) &&
                "bigint" === typeof input.greater_less &&
                BigInt(3) < input.greater_less &&
                input.greater_less < BigInt(7) &&
                "bigint" === typeof input.greater_equal_less &&
                BigInt(3) <= input.greater_equal_less &&
                input.greater_equal_less < BigInt(7) &&
                "bigint" === typeof input.greater_less_equal &&
                BigInt(3) < input.greater_less_equal &&
                input.greater_less_equal <= BigInt(7) &&
                "bigint" === typeof input.greater_equal_less_equal &&
                BigInt(3) <= input.greater_equal_less_equal &&
                input.greater_equal_less_equal <= BigInt(7) &&
                "bigint" === typeof input.equal &&
                BigInt(10) <= input.equal &&
                input.equal <= BigInt(10) &&
                (9 === Object.keys(input).length ||
                  Object.keys(input).every((key: any) => {
                    if (
                      [
                        "greater",
                        "greater_equal",
                        "less",
                        "less_equal",
                        "greater_less",
                        "greater_equal_less",
                        "greater_less_equal",
                        "greater_equal_less_equal",
                        "equal",
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
              ): input is TypeTagRangeBigInt => {
                const $join = (typia.functional.validateEqualsParameters as any)
                  .join;
                const $vo0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    ((Array.isArray(input.value) ||
                      $report(_exceptionable, {
                        path: _path + ".value",
                        expected: "Array<TypeTagRangeBigInt.Type>",
                        value: input.value,
                      })) &&
                      input.value
                        .map(
                          (elem: any, _index1: number) =>
                            ((("object" === typeof elem && null !== elem) ||
                              $report(_exceptionable, {
                                path: _path + ".value[" + _index1 + "]",
                                expected: "TypeTagRangeBigInt.Type",
                                value: elem,
                              })) &&
                              $vo1(
                                elem,
                                _path + ".value[" + _index1 + "]",
                                true && _exceptionable,
                              )) ||
                            $report(_exceptionable, {
                              path: _path + ".value[" + _index1 + "]",
                              expected: "TypeTagRangeBigInt.Type",
                              value: elem,
                            }),
                        )
                        .every((flag: boolean) => flag)) ||
                      $report(_exceptionable, {
                        path: _path + ".value",
                        expected: "Array<TypeTagRangeBigInt.Type>",
                        value: input.value,
                      }),
                    1 === Object.keys(input).length ||
                      false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (["value"].some((prop: any) => key === prop))
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
                const $vo1 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    ("bigint" === typeof input.greater &&
                      (BigInt(3) < input.greater ||
                        $report(_exceptionable, {
                          path: _path + ".greater",
                          expected: "bigint & ExclusiveMinimum<3n>",
                          value: input.greater,
                        }))) ||
                      $report(_exceptionable, {
                        path: _path + ".greater",
                        expected: "(bigint & ExclusiveMinimum<3n>)",
                        value: input.greater,
                      }),
                    ("bigint" === typeof input.greater_equal &&
                      (BigInt(3) <= input.greater_equal ||
                        $report(_exceptionable, {
                          path: _path + ".greater_equal",
                          expected: "bigint & Minimum<3n>",
                          value: input.greater_equal,
                        }))) ||
                      $report(_exceptionable, {
                        path: _path + ".greater_equal",
                        expected: "(bigint & Minimum<3n>)",
                        value: input.greater_equal,
                      }),
                    ("bigint" === typeof input.less &&
                      (input.less < BigInt(7) ||
                        $report(_exceptionable, {
                          path: _path + ".less",
                          expected: "bigint & ExclusiveMaximum<7n>",
                          value: input.less,
                        }))) ||
                      $report(_exceptionable, {
                        path: _path + ".less",
                        expected: "(bigint & ExclusiveMaximum<7n>)",
                        value: input.less,
                      }),
                    ("bigint" === typeof input.less_equal &&
                      (input.less_equal <= BigInt(7) ||
                        $report(_exceptionable, {
                          path: _path + ".less_equal",
                          expected: "bigint & Maximum<7n>",
                          value: input.less_equal,
                        }))) ||
                      $report(_exceptionable, {
                        path: _path + ".less_equal",
                        expected: "(bigint & Maximum<7n>)",
                        value: input.less_equal,
                      }),
                    ("bigint" === typeof input.greater_less &&
                      (BigInt(3) < input.greater_less ||
                        $report(_exceptionable, {
                          path: _path + ".greater_less",
                          expected: "bigint & ExclusiveMinimum<3n>",
                          value: input.greater_less,
                        })) &&
                      (input.greater_less < BigInt(7) ||
                        $report(_exceptionable, {
                          path: _path + ".greater_less",
                          expected: "bigint & ExclusiveMaximum<7n>",
                          value: input.greater_less,
                        }))) ||
                      $report(_exceptionable, {
                        path: _path + ".greater_less",
                        expected:
                          "(bigint & ExclusiveMinimum<3n> & ExclusiveMaximum<7n>)",
                        value: input.greater_less,
                      }),
                    ("bigint" === typeof input.greater_equal_less &&
                      (BigInt(3) <= input.greater_equal_less ||
                        $report(_exceptionable, {
                          path: _path + ".greater_equal_less",
                          expected: "bigint & Minimum<3n>",
                          value: input.greater_equal_less,
                        })) &&
                      (input.greater_equal_less < BigInt(7) ||
                        $report(_exceptionable, {
                          path: _path + ".greater_equal_less",
                          expected: "bigint & ExclusiveMaximum<7n>",
                          value: input.greater_equal_less,
                        }))) ||
                      $report(_exceptionable, {
                        path: _path + ".greater_equal_less",
                        expected:
                          "(bigint & Minimum<3n> & ExclusiveMaximum<7n>)",
                        value: input.greater_equal_less,
                      }),
                    ("bigint" === typeof input.greater_less_equal &&
                      (BigInt(3) < input.greater_less_equal ||
                        $report(_exceptionable, {
                          path: _path + ".greater_less_equal",
                          expected: "bigint & ExclusiveMinimum<3n>",
                          value: input.greater_less_equal,
                        })) &&
                      (input.greater_less_equal <= BigInt(7) ||
                        $report(_exceptionable, {
                          path: _path + ".greater_less_equal",
                          expected: "bigint & Maximum<7n>",
                          value: input.greater_less_equal,
                        }))) ||
                      $report(_exceptionable, {
                        path: _path + ".greater_less_equal",
                        expected:
                          "(bigint & ExclusiveMinimum<3n> & Maximum<7n>)",
                        value: input.greater_less_equal,
                      }),
                    ("bigint" === typeof input.greater_equal_less_equal &&
                      (BigInt(3) <= input.greater_equal_less_equal ||
                        $report(_exceptionable, {
                          path: _path + ".greater_equal_less_equal",
                          expected: "bigint & Minimum<3n>",
                          value: input.greater_equal_less_equal,
                        })) &&
                      (input.greater_equal_less_equal <= BigInt(7) ||
                        $report(_exceptionable, {
                          path: _path + ".greater_equal_less_equal",
                          expected: "bigint & Maximum<7n>",
                          value: input.greater_equal_less_equal,
                        }))) ||
                      $report(_exceptionable, {
                        path: _path + ".greater_equal_less_equal",
                        expected: "(bigint & Minimum<3n> & Maximum<7n>)",
                        value: input.greater_equal_less_equal,
                      }),
                    ("bigint" === typeof input.equal &&
                      (BigInt(10) <= input.equal ||
                        $report(_exceptionable, {
                          path: _path + ".equal",
                          expected: "bigint & Minimum<10n>",
                          value: input.equal,
                        })) &&
                      (input.equal <= BigInt(10) ||
                        $report(_exceptionable, {
                          path: _path + ".equal",
                          expected: "bigint & Maximum<10n>",
                          value: input.equal,
                        }))) ||
                      $report(_exceptionable, {
                        path: _path + ".equal",
                        expected: "(bigint & Minimum<10n> & Maximum<10n>)",
                        value: input.equal,
                      }),
                    9 === Object.keys(input).length ||
                      false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (
                            [
                              "greater",
                              "greater_equal",
                              "less",
                              "less_equal",
                              "greater_less",
                              "greater_equal_less",
                              "greater_less_equal",
                              "greater_equal_less_equal",
                              "equal",
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
                      expected: "TypeTagRangeBigInt",
                      value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "TypeTagRangeBigInt",
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

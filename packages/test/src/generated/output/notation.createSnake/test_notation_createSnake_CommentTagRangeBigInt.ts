import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { CommentTagRangeBigInt } from "../../../structures/CommentTagRangeBigInt";

export const test_notation_createValidateSnake_CommentTagRangeBigInt =
  _test_notation_validateGeneral(
    "CommentTagRangeBigInt",
  )<CommentTagRangeBigInt>(CommentTagRangeBigInt)<
    typia.SnakeCase<CommentTagRangeBigInt>
  >({
    convert: (
      input: any,
    ): typia.IValidation<typia.SnakeCase<CommentTagRangeBigInt>> => {
      const validate = (
        input: any,
      ): typia.IValidation<CommentTagRangeBigInt> => {
        const errors = [] as any[];
        const __is = (input: any): input is CommentTagRangeBigInt => {
          const $io0 = (input: any): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io1(elem),
            );
          const $io1 = (input: any): boolean =>
            "bigint" === typeof input.greater &&
            3 < input.greater &&
            "bigint" === typeof input.greater_equal &&
            3 <= input.greater_equal &&
            "bigint" === typeof input.less &&
            input.less < 7 &&
            "bigint" === typeof input.less_equal &&
            input.less_equal <= 7 &&
            "bigint" === typeof input.greater_less &&
            3 < input.greater_less &&
            input.greater_less < 7 &&
            "bigint" === typeof input.greater_equal_less &&
            3 <= input.greater_equal_less &&
            input.greater_equal_less < 7 &&
            "bigint" === typeof input.greater_less_equal &&
            3 < input.greater_less_equal &&
            input.greater_less_equal <= 7 &&
            "bigint" === typeof input.greater_equal_less_equal &&
            3 <= input.greater_equal_less_equal &&
            input.greater_equal_less_equal <= 7 &&
            "bigint" === typeof input.equal &&
            10 <= input.equal &&
            input.equal <= 10;
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input)) {
          const $report = (typia.notations.createValidateSnake as any).report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is CommentTagRangeBigInt => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((Array.isArray(input.value) ||
                  $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "Array<CommentTagRangeBigInt.Type>",
                    value: input.value,
                  })) &&
                  input.value
                    .map(
                      (elem: any, _index1: number) =>
                        ((("object" === typeof elem && null !== elem) ||
                          $report(_exceptionable, {
                            path: _path + ".value[" + _index1 + "]",
                            expected: "CommentTagRangeBigInt.Type",
                            value: elem,
                          })) &&
                          $vo1(
                            elem,
                            _path + ".value[" + _index1 + "]",
                            true && _exceptionable,
                          )) ||
                        $report(_exceptionable, {
                          path: _path + ".value[" + _index1 + "]",
                          expected: "CommentTagRangeBigInt.Type",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "Array<CommentTagRangeBigInt.Type>",
                    value: input.value,
                  }),
              ].every((flag: boolean) => flag);
            const $vo1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ("bigint" === typeof input.greater &&
                  (3 < input.greater ||
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
                  (3 <= input.greater_equal ||
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
                  (input.less < 7 ||
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
                  (input.less_equal <= 7 ||
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
                  (3 < input.greater_less ||
                    $report(_exceptionable, {
                      path: _path + ".greater_less",
                      expected: "bigint & ExclusiveMinimum<3n>",
                      value: input.greater_less,
                    })) &&
                  (input.greater_less < 7 ||
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
                  (3 <= input.greater_equal_less ||
                    $report(_exceptionable, {
                      path: _path + ".greater_equal_less",
                      expected: "bigint & Minimum<3n>",
                      value: input.greater_equal_less,
                    })) &&
                  (input.greater_equal_less < 7 ||
                    $report(_exceptionable, {
                      path: _path + ".greater_equal_less",
                      expected: "bigint & ExclusiveMaximum<7n>",
                      value: input.greater_equal_less,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".greater_equal_less",
                    expected: "(bigint & Minimum<3n> & ExclusiveMaximum<7n>)",
                    value: input.greater_equal_less,
                  }),
                ("bigint" === typeof input.greater_less_equal &&
                  (3 < input.greater_less_equal ||
                    $report(_exceptionable, {
                      path: _path + ".greater_less_equal",
                      expected: "bigint & ExclusiveMinimum<3n>",
                      value: input.greater_less_equal,
                    })) &&
                  (input.greater_less_equal <= 7 ||
                    $report(_exceptionable, {
                      path: _path + ".greater_less_equal",
                      expected: "bigint & Maximum<7n>",
                      value: input.greater_less_equal,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".greater_less_equal",
                    expected: "(bigint & ExclusiveMinimum<3n> & Maximum<7n>)",
                    value: input.greater_less_equal,
                  }),
                ("bigint" === typeof input.greater_equal_less_equal &&
                  (3 <= input.greater_equal_less_equal ||
                    $report(_exceptionable, {
                      path: _path + ".greater_equal_less_equal",
                      expected: "bigint & Minimum<3n>",
                      value: input.greater_equal_less_equal,
                    })) &&
                  (input.greater_equal_less_equal <= 7 ||
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
                  (10 <= input.equal ||
                    $report(_exceptionable, {
                      path: _path + ".equal",
                      expected: "bigint & Minimum<10n>",
                      value: input.equal,
                    })) &&
                  (input.equal <= 10 ||
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
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input && null !== input) ||
                $report(true, {
                  path: _path + "",
                  expected: "CommentTagRangeBigInt",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "CommentTagRangeBigInt",
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
        input: CommentTagRangeBigInt,
      ): typia.SnakeCase<CommentTagRangeBigInt> => {
        const $io1 = (input: any): boolean =>
          "bigint" === typeof input.greater &&
          3 < input.greater &&
          "bigint" === typeof input.greater_equal &&
          3 <= input.greater_equal &&
          "bigint" === typeof input.less &&
          input.less < 7 &&
          "bigint" === typeof input.less_equal &&
          input.less_equal <= 7 &&
          "bigint" === typeof input.greater_less &&
          3 < input.greater_less &&
          input.greater_less < 7 &&
          "bigint" === typeof input.greater_equal_less &&
          3 <= input.greater_equal_less &&
          input.greater_equal_less < 7 &&
          "bigint" === typeof input.greater_less_equal &&
          3 < input.greater_less_equal &&
          input.greater_less_equal <= 7 &&
          "bigint" === typeof input.greater_equal_less_equal &&
          3 <= input.greater_equal_less_equal &&
          input.greater_equal_less_equal <= 7 &&
          "bigint" === typeof input.equal &&
          10 <= input.equal &&
          input.equal <= 10;
        const $cp0 = (input: any) =>
          input.map((elem: any) =>
            "object" === typeof elem && null !== elem
              ? $co1(elem)
              : (elem as any),
          );
        const $co0 = (input: any): any => ({
          value: Array.isArray(input.value)
            ? $cp0(input.value)
            : (input.value as any),
        });
        const $co1 = (input: any): any => ({
          greater: input.greater as any,
          greater_equal: input.greater_equal as any,
          less: input.less as any,
          less_equal: input.less_equal as any,
          greater_less: input.greater_less as any,
          greater_equal_less: input.greater_equal_less as any,
          greater_less_equal: input.greater_less_equal as any,
          greater_equal_less_equal: input.greater_equal_less_equal as any,
          equal: input.equal as any,
        });
        return "object" === typeof input && null !== input
          ? $co0(input)
          : (input as any);
      };
      const output = validate(input) as any;
      if (output.success) output.data = general(input);
      return output;
    },
    assert: (input: any): typia.SnakeCase<CommentTagRangeBigInt> => {
      const __is = (
        input: any,
      ): input is typia.SnakeCase<CommentTagRangeBigInt> => {
        const $io0 = (input: any): boolean =>
          Array.isArray(input.value) &&
          input.value.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io1(elem),
          );
        const $io1 = (input: any): boolean =>
          "bigint" === typeof input.greater &&
          3 < input.greater &&
          "bigint" === typeof input.greater_equal &&
          3 <= input.greater_equal &&
          "bigint" === typeof input.less &&
          input.less < 7 &&
          "bigint" === typeof input.less_equal &&
          input.less_equal <= 7 &&
          "bigint" === typeof input.greater_less &&
          3 < input.greater_less &&
          input.greater_less < 7 &&
          "bigint" === typeof input.greater_equal_less &&
          3 <= input.greater_equal_less &&
          input.greater_equal_less < 7 &&
          "bigint" === typeof input.greater_less_equal &&
          3 < input.greater_less_equal &&
          input.greater_less_equal <= 7 &&
          "bigint" === typeof input.greater_equal_less_equal &&
          3 <= input.greater_equal_less_equal &&
          input.greater_equal_less_equal <= 7 &&
          "bigint" === typeof input.equal &&
          10 <= input.equal &&
          input.equal <= 10;
        return "object" === typeof input && null !== input && $io0(input);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.SnakeCase<CommentTagRangeBigInt> => {
          const $guard = (typia.createAssert as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ((Array.isArray(input.value) ||
              $guard(_exceptionable, {
                path: _path + ".value",
                expected: "Array<CommentTagRangeBigInt.Type>",
                value: input.value,
              })) &&
              input.value.every(
                (elem: any, _index1: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(_exceptionable, {
                      path: _path + ".value[" + _index1 + "]",
                      expected: "CommentTagRangeBigInt.Type",
                      value: elem,
                    })) &&
                    $ao1(
                      elem,
                      _path + ".value[" + _index1 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(_exceptionable, {
                    path: _path + ".value[" + _index1 + "]",
                    expected: "CommentTagRangeBigInt.Type",
                    value: elem,
                  }),
              )) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "Array<CommentTagRangeBigInt.Type>",
              value: input.value,
            });
          const $ao1 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (("bigint" === typeof input.greater &&
              (3 < input.greater ||
                $guard(_exceptionable, {
                  path: _path + ".greater",
                  expected: "bigint & ExclusiveMinimum<3n>",
                  value: input.greater,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".greater",
                expected: "(bigint & ExclusiveMinimum<3n>)",
                value: input.greater,
              })) &&
            (("bigint" === typeof input.greater_equal &&
              (3 <= input.greater_equal ||
                $guard(_exceptionable, {
                  path: _path + ".greater_equal",
                  expected: "bigint & Minimum<3n>",
                  value: input.greater_equal,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".greater_equal",
                expected: "(bigint & Minimum<3n>)",
                value: input.greater_equal,
              })) &&
            (("bigint" === typeof input.less &&
              (input.less < 7 ||
                $guard(_exceptionable, {
                  path: _path + ".less",
                  expected: "bigint & ExclusiveMaximum<7n>",
                  value: input.less,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".less",
                expected: "(bigint & ExclusiveMaximum<7n>)",
                value: input.less,
              })) &&
            (("bigint" === typeof input.less_equal &&
              (input.less_equal <= 7 ||
                $guard(_exceptionable, {
                  path: _path + ".less_equal",
                  expected: "bigint & Maximum<7n>",
                  value: input.less_equal,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".less_equal",
                expected: "(bigint & Maximum<7n>)",
                value: input.less_equal,
              })) &&
            (("bigint" === typeof input.greater_less &&
              (3 < input.greater_less ||
                $guard(_exceptionable, {
                  path: _path + ".greater_less",
                  expected: "bigint & ExclusiveMinimum<3n>",
                  value: input.greater_less,
                })) &&
              (input.greater_less < 7 ||
                $guard(_exceptionable, {
                  path: _path + ".greater_less",
                  expected: "bigint & ExclusiveMaximum<7n>",
                  value: input.greater_less,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".greater_less",
                expected:
                  "(bigint & ExclusiveMinimum<3n> & ExclusiveMaximum<7n>)",
                value: input.greater_less,
              })) &&
            (("bigint" === typeof input.greater_equal_less &&
              (3 <= input.greater_equal_less ||
                $guard(_exceptionable, {
                  path: _path + ".greater_equal_less",
                  expected: "bigint & Minimum<3n>",
                  value: input.greater_equal_less,
                })) &&
              (input.greater_equal_less < 7 ||
                $guard(_exceptionable, {
                  path: _path + ".greater_equal_less",
                  expected: "bigint & ExclusiveMaximum<7n>",
                  value: input.greater_equal_less,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".greater_equal_less",
                expected: "(bigint & Minimum<3n> & ExclusiveMaximum<7n>)",
                value: input.greater_equal_less,
              })) &&
            (("bigint" === typeof input.greater_less_equal &&
              (3 < input.greater_less_equal ||
                $guard(_exceptionable, {
                  path: _path + ".greater_less_equal",
                  expected: "bigint & ExclusiveMinimum<3n>",
                  value: input.greater_less_equal,
                })) &&
              (input.greater_less_equal <= 7 ||
                $guard(_exceptionable, {
                  path: _path + ".greater_less_equal",
                  expected: "bigint & Maximum<7n>",
                  value: input.greater_less_equal,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".greater_less_equal",
                expected: "(bigint & ExclusiveMinimum<3n> & Maximum<7n>)",
                value: input.greater_less_equal,
              })) &&
            (("bigint" === typeof input.greater_equal_less_equal &&
              (3 <= input.greater_equal_less_equal ||
                $guard(_exceptionable, {
                  path: _path + ".greater_equal_less_equal",
                  expected: "bigint & Minimum<3n>",
                  value: input.greater_equal_less_equal,
                })) &&
              (input.greater_equal_less_equal <= 7 ||
                $guard(_exceptionable, {
                  path: _path + ".greater_equal_less_equal",
                  expected: "bigint & Maximum<7n>",
                  value: input.greater_equal_less_equal,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".greater_equal_less_equal",
                expected: "(bigint & Minimum<3n> & Maximum<7n>)",
                value: input.greater_equal_less_equal,
              })) &&
            (("bigint" === typeof input.equal &&
              (10 <= input.equal ||
                $guard(_exceptionable, {
                  path: _path + ".equal",
                  expected: "bigint & Minimum<10n>",
                  value: input.equal,
                })) &&
              (input.equal <= 10 ||
                $guard(_exceptionable, {
                  path: _path + ".equal",
                  expected: "bigint & Maximum<10n>",
                  value: input.equal,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".equal",
                expected: "(bigint & Minimum<10n> & Maximum<10n>)",
                value: input.equal,
              }));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(true, {
                path: _path + "",
                expected: "CommentTagRangeBigInt",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "CommentTagRangeBigInt",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    },
  });

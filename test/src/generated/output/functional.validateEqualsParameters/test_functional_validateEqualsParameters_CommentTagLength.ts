import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../../internal/_test_functional_validateEqualsParameters";
import { CommentTagLength } from "../../../structures/CommentTagLength";

export const test_functional_validateEqualsParameters_CommentTagLength =
  _test_functional_validateEqualsParameters("CommentTagLength")(
    CommentTagLength,
  )(
    (p: (input: CommentTagLength) => CommentTagLength) =>
      (
        input: CommentTagLength,
      ): import("typia").IValidation<CommentTagLength> => {
        const paramResults = [
          ((input: any): typia.IValidation<CommentTagLength> => {
            const errors = [] as any[];
            const __is = (
              input: any,
              _exceptionable: boolean = true,
            ): input is CommentTagLength => {
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
                "string" === typeof input.fixed &&
                5 <= input.fixed.length &&
                input.fixed.length <= 5 &&
                "string" === typeof input.minimum &&
                3 <= input.minimum.length &&
                "string" === typeof input.maximum &&
                input.maximum.length <= 7 &&
                "string" === typeof input.minimum_and_maximum &&
                3 <= input.minimum_and_maximum.length &&
                input.minimum_and_maximum.length <= 7 &&
                "string" === typeof input.equal &&
                10 <= input.equal.length &&
                input.equal.length <= 19 &&
                (5 === Object.keys(input).length ||
                  Object.keys(input).every((key: any) => {
                    if (
                      [
                        "fixed",
                        "minimum",
                        "maximum",
                        "minimum_and_maximum",
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
              ): input is CommentTagLength => {
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
                        expected: "Array<CommentTagLength.Type>",
                        value: input.value,
                      })) &&
                      input.value
                        .map(
                          (elem: any, _index1: number) =>
                            ((("object" === typeof elem && null !== elem) ||
                              $report(_exceptionable, {
                                path: _path + ".value[" + _index1 + "]",
                                expected: "CommentTagLength.Type",
                                value: elem,
                              })) &&
                              $vo1(
                                elem,
                                _path + ".value[" + _index1 + "]",
                                true && _exceptionable,
                              )) ||
                            $report(_exceptionable, {
                              path: _path + ".value[" + _index1 + "]",
                              expected: "CommentTagLength.Type",
                              value: elem,
                            }),
                        )
                        .every((flag: boolean) => flag)) ||
                      $report(_exceptionable, {
                        path: _path + ".value",
                        expected: "Array<CommentTagLength.Type>",
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
                    ("string" === typeof input.fixed &&
                      (5 <= input.fixed.length ||
                        $report(_exceptionable, {
                          path: _path + ".fixed",
                          expected: "string & MinLength<5>",
                          value: input.fixed,
                        })) &&
                      (input.fixed.length <= 5 ||
                        $report(_exceptionable, {
                          path: _path + ".fixed",
                          expected: "string & MaxLength<5>",
                          value: input.fixed,
                        }))) ||
                      $report(_exceptionable, {
                        path: _path + ".fixed",
                        expected: "(string & MinLength<5> & MaxLength<5>)",
                        value: input.fixed,
                      }),
                    ("string" === typeof input.minimum &&
                      (3 <= input.minimum.length ||
                        $report(_exceptionable, {
                          path: _path + ".minimum",
                          expected: "string & MinLength<3>",
                          value: input.minimum,
                        }))) ||
                      $report(_exceptionable, {
                        path: _path + ".minimum",
                        expected: "(string & MinLength<3>)",
                        value: input.minimum,
                      }),
                    ("string" === typeof input.maximum &&
                      (input.maximum.length <= 7 ||
                        $report(_exceptionable, {
                          path: _path + ".maximum",
                          expected: "string & MaxLength<7>",
                          value: input.maximum,
                        }))) ||
                      $report(_exceptionable, {
                        path: _path + ".maximum",
                        expected: "(string & MaxLength<7>)",
                        value: input.maximum,
                      }),
                    ("string" === typeof input.minimum_and_maximum &&
                      (3 <= input.minimum_and_maximum.length ||
                        $report(_exceptionable, {
                          path: _path + ".minimum_and_maximum",
                          expected: "string & MinLength<3>",
                          value: input.minimum_and_maximum,
                        })) &&
                      (input.minimum_and_maximum.length <= 7 ||
                        $report(_exceptionable, {
                          path: _path + ".minimum_and_maximum",
                          expected: "string & MaxLength<7>",
                          value: input.minimum_and_maximum,
                        }))) ||
                      $report(_exceptionable, {
                        path: _path + ".minimum_and_maximum",
                        expected: "(string & MinLength<3> & MaxLength<7>)",
                        value: input.minimum_and_maximum,
                      }),
                    ("string" === typeof input.equal &&
                      (10 <= input.equal.length ||
                        $report(_exceptionable, {
                          path: _path + ".equal",
                          expected: "string & MinLength<10>",
                          value: input.equal,
                        })) &&
                      (input.equal.length <= 19 ||
                        $report(_exceptionable, {
                          path: _path + ".equal",
                          expected: "string & MaxLength<19>",
                          value: input.equal,
                        }))) ||
                      $report(_exceptionable, {
                        path: _path + ".equal",
                        expected: "(string & MinLength<10> & MaxLength<19>)",
                        value: input.equal,
                      }),
                    5 === Object.keys(input).length ||
                      false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (
                            [
                              "fixed",
                              "minimum",
                              "maximum",
                              "minimum_and_maximum",
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
                      expected: "CommentTagLength",
                      value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "CommentTagLength",
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

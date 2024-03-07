import typia from "typia";
import { _test_functional_validateEqualsFunction } from "../../../internal/_test_functional_validateEqualsFunction";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";
export const test_functional_validateEqualsFunction_ObjectUndefined =
  _test_functional_validateEqualsFunction("ObjectUndefined")(ObjectUndefined)(
    (p: (input: ObjectUndefined) => ObjectUndefined) =>
      (
        input: ObjectUndefined,
      ): import("typia").IValidation<ObjectUndefined> => {
        const paramResults = [
          ((input: any): typia.IValidation<ObjectUndefined> => {
            const errors = [] as any[];
            const __is = (
              input: any,
              _exceptionable: boolean = true,
            ): input is ObjectUndefined => {
              const $io0 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
                "string" === typeof input.name &&
                (undefined === input.professor ||
                  "string" === typeof input.professor ||
                  ("number" === typeof input.professor &&
                    Number.isFinite(input.professor))) &&
                (undefined === input.classroom ||
                  ("object" === typeof input.classroom &&
                    null !== input.classroom &&
                    $io1(input.classroom, true && _exceptionable))) &&
                (undefined === input.grade ||
                  ("number" === typeof input.grade &&
                    Number.isFinite(input.grade))) &&
                null !== input.nothing &&
                undefined === input.nothing &&
                true &&
                null !== input.never &&
                undefined === input.never &&
                (2 === Object.keys(input).length ||
                  Object.keys(input).every((key: any) => {
                    if (
                      [
                        "name",
                        "professor",
                        "classroom",
                        "grade",
                        "nothing",
                        "unknown",
                        "never",
                      ].some((prop: any) => key === prop)
                    )
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                  }));
              const $io1 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
                "string" === typeof input.id &&
                "string" === typeof input.name &&
                (2 === Object.keys(input).length ||
                  Object.keys(input).every((key: any) => {
                    if (["id", "name"].some((prop: any) => key === prop))
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                  }));
              return (
                Array.isArray(input) &&
                input.every(
                  (elem: any, _index1: number) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    $io0(elem, true),
                )
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
              ): input is ObjectUndefined => {
                const $join = (typia.functional.validateEqualsFunction as any)
                  .join;
                const $vo0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    "string" === typeof input.name ||
                      $report(_exceptionable, {
                        path: _path + ".name",
                        expected: "string",
                        value: input.name,
                      }),
                    undefined === input.professor ||
                      "string" === typeof input.professor ||
                      ("number" === typeof input.professor &&
                        Number.isFinite(input.professor)) ||
                      $report(_exceptionable, {
                        path: _path + ".professor",
                        expected: "(number | string | undefined)",
                        value: input.professor,
                      }),
                    undefined === input.classroom ||
                      ((("object" === typeof input.classroom &&
                        null !== input.classroom) ||
                        $report(_exceptionable, {
                          path: _path + ".classroom",
                          expected: "(ObjectUndefined.IClassroom | undefined)",
                          value: input.classroom,
                        })) &&
                        $vo1(
                          input.classroom,
                          _path + ".classroom",
                          true && _exceptionable,
                        )) ||
                      $report(_exceptionable, {
                        path: _path + ".classroom",
                        expected: "(ObjectUndefined.IClassroom | undefined)",
                        value: input.classroom,
                      }),
                    undefined === input.grade ||
                      ("number" === typeof input.grade &&
                        Number.isFinite(input.grade)) ||
                      $report(_exceptionable, {
                        path: _path + ".grade",
                        expected: "(number | undefined)",
                        value: input.grade,
                      }),
                    (null !== input.nothing ||
                      $report(_exceptionable, {
                        path: _path + ".nothing",
                        expected: "undefined",
                        value: input.nothing,
                      })) &&
                      (undefined === input.nothing ||
                        $report(_exceptionable, {
                          path: _path + ".nothing",
                          expected: "undefined",
                          value: input.nothing,
                        })),
                    true,
                    (null !== input.never ||
                      $report(_exceptionable, {
                        path: _path + ".never",
                        expected: "undefined",
                        value: input.never,
                      })) &&
                      (undefined === input.never ||
                        $report(_exceptionable, {
                          path: _path + ".never",
                          expected: "undefined",
                          value: input.never,
                        })),
                    2 === Object.keys(input).length ||
                      false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (
                            [
                              "name",
                              "professor",
                              "classroom",
                              "grade",
                              "nothing",
                              "unknown",
                              "never",
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
                const $vo1 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    "string" === typeof input.id ||
                      $report(_exceptionable, {
                        path: _path + ".id",
                        expected: "string",
                        value: input.id,
                      }),
                    "string" === typeof input.name ||
                      $report(_exceptionable, {
                        path: _path + ".name",
                        expected: "string",
                        value: input.name,
                      }),
                    2 === Object.keys(input).length ||
                      false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (["id", "name"].some((prop: any) => key === prop))
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
                  ((Array.isArray(input) ||
                    $report(true, {
                      path: _path + "",
                      expected: "ObjectUndefined",
                      value: input,
                    })) &&
                    input
                      .map(
                        (elem: any, _index1: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(true, {
                              path: _path + "[" + _index1 + "]",
                              expected: "ObjectUndefined.ILecture",
                              value: elem,
                            })) &&
                            $vo0(elem, _path + "[" + _index1 + "]", true)) ||
                          $report(true, {
                            path: _path + "[" + _index1 + "]",
                            expected: "ObjectUndefined.ILecture",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectUndefined",
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
        const result = ((input: any): typia.IValidation<ObjectUndefined> => {
          const errors = [] as any[];
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ObjectUndefined => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "string" === typeof input.name &&
              (undefined === input.professor ||
                "string" === typeof input.professor ||
                ("number" === typeof input.professor &&
                  Number.isFinite(input.professor))) &&
              (undefined === input.classroom ||
                ("object" === typeof input.classroom &&
                  null !== input.classroom &&
                  $io1(input.classroom, true && _exceptionable))) &&
              (undefined === input.grade ||
                ("number" === typeof input.grade &&
                  Number.isFinite(input.grade))) &&
              null !== input.nothing &&
              undefined === input.nothing &&
              true &&
              null !== input.never &&
              undefined === input.never &&
              (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    [
                      "name",
                      "professor",
                      "classroom",
                      "grade",
                      "nothing",
                      "unknown",
                      "never",
                    ].some((prop: any) => key === prop)
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io1 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "string" === typeof input.id &&
              "string" === typeof input.name &&
              (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["id", "name"].some((prop: any) => key === prop))
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any, _index1: number) =>
                  "object" === typeof elem && null !== elem && $io0(elem, true),
              )
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
            ): input is ObjectUndefined => {
              const $join = (typia.functional.validateEqualsFunction as any)
                .join;
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "string" === typeof input.name ||
                    $report(_exceptionable, {
                      path: _path + ".name",
                      expected: "string",
                      value: input.name,
                    }),
                  undefined === input.professor ||
                    "string" === typeof input.professor ||
                    ("number" === typeof input.professor &&
                      Number.isFinite(input.professor)) ||
                    $report(_exceptionable, {
                      path: _path + ".professor",
                      expected: "(number | string | undefined)",
                      value: input.professor,
                    }),
                  undefined === input.classroom ||
                    ((("object" === typeof input.classroom &&
                      null !== input.classroom) ||
                      $report(_exceptionable, {
                        path: _path + ".classroom",
                        expected: "(ObjectUndefined.IClassroom | undefined)",
                        value: input.classroom,
                      })) &&
                      $vo1(
                        input.classroom,
                        _path + ".classroom",
                        true && _exceptionable,
                      )) ||
                    $report(_exceptionable, {
                      path: _path + ".classroom",
                      expected: "(ObjectUndefined.IClassroom | undefined)",
                      value: input.classroom,
                    }),
                  undefined === input.grade ||
                    ("number" === typeof input.grade &&
                      Number.isFinite(input.grade)) ||
                    $report(_exceptionable, {
                      path: _path + ".grade",
                      expected: "(number | undefined)",
                      value: input.grade,
                    }),
                  (null !== input.nothing ||
                    $report(_exceptionable, {
                      path: _path + ".nothing",
                      expected: "undefined",
                      value: input.nothing,
                    })) &&
                    (undefined === input.nothing ||
                      $report(_exceptionable, {
                        path: _path + ".nothing",
                        expected: "undefined",
                        value: input.nothing,
                      })),
                  true,
                  (null !== input.never ||
                    $report(_exceptionable, {
                      path: _path + ".never",
                      expected: "undefined",
                      value: input.never,
                    })) &&
                    (undefined === input.never ||
                      $report(_exceptionable, {
                        path: _path + ".never",
                        expected: "undefined",
                        value: input.never,
                      })),
                  2 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input)
                      .map((key: any) => {
                        if (
                          [
                            "name",
                            "professor",
                            "classroom",
                            "grade",
                            "nothing",
                            "unknown",
                            "never",
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
              const $vo1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "string" === typeof input.id ||
                    $report(_exceptionable, {
                      path: _path + ".id",
                      expected: "string",
                      value: input.id,
                    }),
                  "string" === typeof input.name ||
                    $report(_exceptionable, {
                      path: _path + ".name",
                      expected: "string",
                      value: input.name,
                    }),
                  2 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input)
                      .map((key: any) => {
                        if (["id", "name"].some((prop: any) => key === prop))
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
                ((Array.isArray(input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectUndefined",
                    value: input,
                  })) &&
                  input
                    .map(
                      (elem: any, _index1: number) =>
                        ((("object" === typeof elem && null !== elem) ||
                          $report(true, {
                            path: _path + "[" + _index1 + "]",
                            expected: "ObjectUndefined.ILecture",
                            value: elem,
                          })) &&
                          $vo0(elem, _path + "[" + _index1 + "]", true)) ||
                        $report(true, {
                          path: _path + "[" + _index1 + "]",
                          expected: "ObjectUndefined.ILecture",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectUndefined",
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

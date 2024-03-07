import typia from "typia";
import { _test_functional_validateEqualsFunctionAsync } from "../../../internal/_test_functional_validateEqualsFunctionAsync";
import { ObjectGeneric } from "../../../structures/ObjectGeneric";
export const test_functional_validateEqualsFunctionAsync_ObjectGeneric =
  _test_functional_validateEqualsFunctionAsync("ObjectGeneric")(ObjectGeneric)(
    (p: (input: ObjectGeneric) => Promise<ObjectGeneric>) =>
      async (
        input: ObjectGeneric,
      ): Promise<import("typia").IValidation<ObjectGeneric>> => {
        const paramResults = [
          ((input: any): typia.IValidation<ObjectGeneric> => {
            const errors = [] as any[];
            const __is = (
              input: any,
              _exceptionable: boolean = true,
            ): input is ObjectGeneric => {
              const $io0 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
                "boolean" === typeof input.value &&
                "object" === typeof input.child &&
                null !== input.child &&
                $io1(input.child, true && _exceptionable) &&
                Array.isArray(input.elements) &&
                input.elements.every(
                  (elem: any, _index1: number) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    $io1(elem, true && _exceptionable),
                ) &&
                (3 === Object.keys(input).length ||
                  Object.keys(input).every((key: any) => {
                    if (
                      ["value", "child", "elements"].some(
                        (prop: any) => key === prop,
                      )
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
                "boolean" === typeof input.child_value &&
                "boolean" === typeof input.child_next &&
                (2 === Object.keys(input).length ||
                  Object.keys(input).every((key: any) => {
                    if (
                      ["child_value", "child_next"].some(
                        (prop: any) => key === prop,
                      )
                    )
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                  }));
              const $io2 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
                "number" === typeof input.value &&
                Number.isFinite(input.value) &&
                "object" === typeof input.child &&
                null !== input.child &&
                $io3(input.child, true && _exceptionable) &&
                Array.isArray(input.elements) &&
                input.elements.every(
                  (elem: any, _index2: number) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    $io3(elem, true && _exceptionable),
                ) &&
                (3 === Object.keys(input).length ||
                  Object.keys(input).every((key: any) => {
                    if (
                      ["value", "child", "elements"].some(
                        (prop: any) => key === prop,
                      )
                    )
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                  }));
              const $io3 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
                "number" === typeof input.child_value &&
                Number.isFinite(input.child_value) &&
                "number" === typeof input.child_next &&
                Number.isFinite(input.child_next) &&
                (2 === Object.keys(input).length ||
                  Object.keys(input).every((key: any) => {
                    if (
                      ["child_value", "child_next"].some(
                        (prop: any) => key === prop,
                      )
                    )
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                  }));
              const $io4 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
                "string" === typeof input.value &&
                "object" === typeof input.child &&
                null !== input.child &&
                $io5(input.child, true && _exceptionable) &&
                Array.isArray(input.elements) &&
                input.elements.every(
                  (elem: any, _index3: number) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    $io5(elem, true && _exceptionable),
                ) &&
                (3 === Object.keys(input).length ||
                  Object.keys(input).every((key: any) => {
                    if (
                      ["value", "child", "elements"].some(
                        (prop: any) => key === prop,
                      )
                    )
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                  }));
              const $io5 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
                "string" === typeof input.child_value &&
                "string" === typeof input.child_next &&
                (2 === Object.keys(input).length ||
                  Object.keys(input).every((key: any) => {
                    if (
                      ["child_value", "child_next"].some(
                        (prop: any) => key === prop,
                      )
                    )
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                  }));
              return (
                Array.isArray(input) &&
                input.length === 3 &&
                "object" === typeof input[0] &&
                null !== input[0] &&
                $io0(input[0], true) &&
                "object" === typeof input[1] &&
                null !== input[1] &&
                $io2(input[1], true) &&
                "object" === typeof input[2] &&
                null !== input[2] &&
                $io4(input[2], true)
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
              ): input is ObjectGeneric => {
                const $join = (typia.functional.validateEqualsFunction as any)
                  .join;
                const $vo0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    "boolean" === typeof input.value ||
                      $report(_exceptionable, {
                        path: _path + ".value",
                        expected: "boolean",
                        value: input.value,
                      }),
                    ((("object" === typeof input.child &&
                      null !== input.child) ||
                      $report(_exceptionable, {
                        path: _path + ".child",
                        expected: "ObjectGeneric.IChild<boolean, boolean>",
                        value: input.child,
                      })) &&
                      $vo1(
                        input.child,
                        _path + ".child",
                        true && _exceptionable,
                      )) ||
                      $report(_exceptionable, {
                        path: _path + ".child",
                        expected: "ObjectGeneric.IChild<boolean, boolean>",
                        value: input.child,
                      }),
                    ((Array.isArray(input.elements) ||
                      $report(_exceptionable, {
                        path: _path + ".elements",
                        expected:
                          "Array<ObjectGeneric.IChild<boolean, boolean>>",
                        value: input.elements,
                      })) &&
                      input.elements
                        .map(
                          (elem: any, _index1: number) =>
                            ((("object" === typeof elem && null !== elem) ||
                              $report(_exceptionable, {
                                path: _path + ".elements[" + _index1 + "]",
                                expected:
                                  "ObjectGeneric.IChild<boolean, boolean>",
                                value: elem,
                              })) &&
                              $vo1(
                                elem,
                                _path + ".elements[" + _index1 + "]",
                                true && _exceptionable,
                              )) ||
                            $report(_exceptionable, {
                              path: _path + ".elements[" + _index1 + "]",
                              expected:
                                "ObjectGeneric.IChild<boolean, boolean>",
                              value: elem,
                            }),
                        )
                        .every((flag: boolean) => flag)) ||
                      $report(_exceptionable, {
                        path: _path + ".elements",
                        expected:
                          "Array<ObjectGeneric.IChild<boolean, boolean>>",
                        value: input.elements,
                      }),
                    3 === Object.keys(input).length ||
                      false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (
                            ["value", "child", "elements"].some(
                              (prop: any) => key === prop,
                            )
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
                    "boolean" === typeof input.child_value ||
                      $report(_exceptionable, {
                        path: _path + ".child_value",
                        expected: "boolean",
                        value: input.child_value,
                      }),
                    "boolean" === typeof input.child_next ||
                      $report(_exceptionable, {
                        path: _path + ".child_next",
                        expected: "boolean",
                        value: input.child_next,
                      }),
                    2 === Object.keys(input).length ||
                      false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (
                            ["child_value", "child_next"].some(
                              (prop: any) => key === prop,
                            )
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
                const $vo2 = (
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
                    ((("object" === typeof input.child &&
                      null !== input.child) ||
                      $report(_exceptionable, {
                        path: _path + ".child",
                        expected: "ObjectGeneric.IChild<number, number>",
                        value: input.child,
                      })) &&
                      $vo3(
                        input.child,
                        _path + ".child",
                        true && _exceptionable,
                      )) ||
                      $report(_exceptionable, {
                        path: _path + ".child",
                        expected: "ObjectGeneric.IChild<number, number>",
                        value: input.child,
                      }),
                    ((Array.isArray(input.elements) ||
                      $report(_exceptionable, {
                        path: _path + ".elements",
                        expected: "Array<ObjectGeneric.IChild<number, number>>",
                        value: input.elements,
                      })) &&
                      input.elements
                        .map(
                          (elem: any, _index2: number) =>
                            ((("object" === typeof elem && null !== elem) ||
                              $report(_exceptionable, {
                                path: _path + ".elements[" + _index2 + "]",
                                expected:
                                  "ObjectGeneric.IChild<number, number>",
                                value: elem,
                              })) &&
                              $vo3(
                                elem,
                                _path + ".elements[" + _index2 + "]",
                                true && _exceptionable,
                              )) ||
                            $report(_exceptionable, {
                              path: _path + ".elements[" + _index2 + "]",
                              expected: "ObjectGeneric.IChild<number, number>",
                              value: elem,
                            }),
                        )
                        .every((flag: boolean) => flag)) ||
                      $report(_exceptionable, {
                        path: _path + ".elements",
                        expected: "Array<ObjectGeneric.IChild<number, number>>",
                        value: input.elements,
                      }),
                    3 === Object.keys(input).length ||
                      false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (
                            ["value", "child", "elements"].some(
                              (prop: any) => key === prop,
                            )
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
                const $vo3 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    ("number" === typeof input.child_value &&
                      Number.isFinite(input.child_value)) ||
                      $report(_exceptionable, {
                        path: _path + ".child_value",
                        expected: "number",
                        value: input.child_value,
                      }),
                    ("number" === typeof input.child_next &&
                      Number.isFinite(input.child_next)) ||
                      $report(_exceptionable, {
                        path: _path + ".child_next",
                        expected: "number",
                        value: input.child_next,
                      }),
                    2 === Object.keys(input).length ||
                      false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (
                            ["child_value", "child_next"].some(
                              (prop: any) => key === prop,
                            )
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
                const $vo4 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    "string" === typeof input.value ||
                      $report(_exceptionable, {
                        path: _path + ".value",
                        expected: "string",
                        value: input.value,
                      }),
                    ((("object" === typeof input.child &&
                      null !== input.child) ||
                      $report(_exceptionable, {
                        path: _path + ".child",
                        expected: "ObjectGeneric.IChild<string, string>",
                        value: input.child,
                      })) &&
                      $vo5(
                        input.child,
                        _path + ".child",
                        true && _exceptionable,
                      )) ||
                      $report(_exceptionable, {
                        path: _path + ".child",
                        expected: "ObjectGeneric.IChild<string, string>",
                        value: input.child,
                      }),
                    ((Array.isArray(input.elements) ||
                      $report(_exceptionable, {
                        path: _path + ".elements",
                        expected: "Array<ObjectGeneric.IChild<string, string>>",
                        value: input.elements,
                      })) &&
                      input.elements
                        .map(
                          (elem: any, _index3: number) =>
                            ((("object" === typeof elem && null !== elem) ||
                              $report(_exceptionable, {
                                path: _path + ".elements[" + _index3 + "]",
                                expected:
                                  "ObjectGeneric.IChild<string, string>",
                                value: elem,
                              })) &&
                              $vo5(
                                elem,
                                _path + ".elements[" + _index3 + "]",
                                true && _exceptionable,
                              )) ||
                            $report(_exceptionable, {
                              path: _path + ".elements[" + _index3 + "]",
                              expected: "ObjectGeneric.IChild<string, string>",
                              value: elem,
                            }),
                        )
                        .every((flag: boolean) => flag)) ||
                      $report(_exceptionable, {
                        path: _path + ".elements",
                        expected: "Array<ObjectGeneric.IChild<string, string>>",
                        value: input.elements,
                      }),
                    3 === Object.keys(input).length ||
                      false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (
                            ["value", "child", "elements"].some(
                              (prop: any) => key === prop,
                            )
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
                const $vo5 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    "string" === typeof input.child_value ||
                      $report(_exceptionable, {
                        path: _path + ".child_value",
                        expected: "string",
                        value: input.child_value,
                      }),
                    "string" === typeof input.child_next ||
                      $report(_exceptionable, {
                        path: _path + ".child_next",
                        expected: "string",
                        value: input.child_next,
                      }),
                    2 === Object.keys(input).length ||
                      false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (
                            ["child_value", "child_next"].some(
                              (prop: any) => key === prop,
                            )
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
                  ((Array.isArray(input) ||
                    $report(true, {
                      path: _path + "",
                      expected: "ObjectGeneric",
                      value: input,
                    })) &&
                    (input.length === 3 ||
                      $report(true, {
                        path: _path + "",
                        expected:
                          "[ObjectGeneric.ISomething<boolean>, ObjectGeneric.ISomething<number>, ObjectGeneric.ISomething<string>]",
                        value: input,
                      })) &&
                    [
                      ((("object" === typeof input[0] && null !== input[0]) ||
                        $report(true, {
                          path: _path + "[0]",
                          expected: "ObjectGeneric.ISomething<boolean>",
                          value: input[0],
                        })) &&
                        $vo0(input[0], _path + "[0]", true)) ||
                        $report(true, {
                          path: _path + "[0]",
                          expected: "ObjectGeneric.ISomething<boolean>",
                          value: input[0],
                        }),
                      ((("object" === typeof input[1] && null !== input[1]) ||
                        $report(true, {
                          path: _path + "[1]",
                          expected: "ObjectGeneric.ISomething<number>",
                          value: input[1],
                        })) &&
                        $vo2(input[1], _path + "[1]", true)) ||
                        $report(true, {
                          path: _path + "[1]",
                          expected: "ObjectGeneric.ISomething<number>",
                          value: input[1],
                        }),
                      ((("object" === typeof input[2] && null !== input[2]) ||
                        $report(true, {
                          path: _path + "[2]",
                          expected: "ObjectGeneric.ISomething<string>",
                          value: input[2],
                        })) &&
                        $vo4(input[2], _path + "[2]", true)) ||
                        $report(true, {
                          path: _path + "[2]",
                          expected: "ObjectGeneric.ISomething<string>",
                          value: input[2],
                        }),
                    ].every((flag: boolean) => flag)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectGeneric",
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
        const result = ((input: any): typia.IValidation<ObjectGeneric> => {
          const errors = [] as any[];
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ObjectGeneric => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "boolean" === typeof input.value &&
              "object" === typeof input.child &&
              null !== input.child &&
              $io1(input.child, true && _exceptionable) &&
              Array.isArray(input.elements) &&
              input.elements.every(
                (elem: any, _index1: number) =>
                  "object" === typeof elem &&
                  null !== elem &&
                  $io1(elem, true && _exceptionable),
              ) &&
              (3 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    ["value", "child", "elements"].some(
                      (prop: any) => key === prop,
                    )
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
              "boolean" === typeof input.child_value &&
              "boolean" === typeof input.child_next &&
              (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    ["child_value", "child_next"].some(
                      (prop: any) => key === prop,
                    )
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io2 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "number" === typeof input.value &&
              Number.isFinite(input.value) &&
              "object" === typeof input.child &&
              null !== input.child &&
              $io3(input.child, true && _exceptionable) &&
              Array.isArray(input.elements) &&
              input.elements.every(
                (elem: any, _index2: number) =>
                  "object" === typeof elem &&
                  null !== elem &&
                  $io3(elem, true && _exceptionable),
              ) &&
              (3 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    ["value", "child", "elements"].some(
                      (prop: any) => key === prop,
                    )
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io3 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "number" === typeof input.child_value &&
              Number.isFinite(input.child_value) &&
              "number" === typeof input.child_next &&
              Number.isFinite(input.child_next) &&
              (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    ["child_value", "child_next"].some(
                      (prop: any) => key === prop,
                    )
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io4 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "string" === typeof input.value &&
              "object" === typeof input.child &&
              null !== input.child &&
              $io5(input.child, true && _exceptionable) &&
              Array.isArray(input.elements) &&
              input.elements.every(
                (elem: any, _index3: number) =>
                  "object" === typeof elem &&
                  null !== elem &&
                  $io5(elem, true && _exceptionable),
              ) &&
              (3 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    ["value", "child", "elements"].some(
                      (prop: any) => key === prop,
                    )
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io5 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "string" === typeof input.child_value &&
              "string" === typeof input.child_next &&
              (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    ["child_value", "child_next"].some(
                      (prop: any) => key === prop,
                    )
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            return (
              Array.isArray(input) &&
              input.length === 3 &&
              "object" === typeof input[0] &&
              null !== input[0] &&
              $io0(input[0], true) &&
              "object" === typeof input[1] &&
              null !== input[1] &&
              $io2(input[1], true) &&
              "object" === typeof input[2] &&
              null !== input[2] &&
              $io4(input[2], true)
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
            ): input is ObjectGeneric => {
              const $join = (typia.functional.validateEqualsFunction as any)
                .join;
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "boolean" === typeof input.value ||
                    $report(_exceptionable, {
                      path: _path + ".value",
                      expected: "boolean",
                      value: input.value,
                    }),
                  ((("object" === typeof input.child && null !== input.child) ||
                    $report(_exceptionable, {
                      path: _path + ".child",
                      expected: "ObjectGeneric.IChild<boolean, boolean>",
                      value: input.child,
                    })) &&
                    $vo1(
                      input.child,
                      _path + ".child",
                      true && _exceptionable,
                    )) ||
                    $report(_exceptionable, {
                      path: _path + ".child",
                      expected: "ObjectGeneric.IChild<boolean, boolean>",
                      value: input.child,
                    }),
                  ((Array.isArray(input.elements) ||
                    $report(_exceptionable, {
                      path: _path + ".elements",
                      expected: "Array<ObjectGeneric.IChild<boolean, boolean>>",
                      value: input.elements,
                    })) &&
                    input.elements
                      .map(
                        (elem: any, _index1: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path: _path + ".elements[" + _index1 + "]",
                              expected:
                                "ObjectGeneric.IChild<boolean, boolean>",
                              value: elem,
                            })) &&
                            $vo1(
                              elem,
                              _path + ".elements[" + _index1 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path: _path + ".elements[" + _index1 + "]",
                            expected: "ObjectGeneric.IChild<boolean, boolean>",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".elements",
                      expected: "Array<ObjectGeneric.IChild<boolean, boolean>>",
                      value: input.elements,
                    }),
                  3 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input)
                      .map((key: any) => {
                        if (
                          ["value", "child", "elements"].some(
                            (prop: any) => key === prop,
                          )
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
                  "boolean" === typeof input.child_value ||
                    $report(_exceptionable, {
                      path: _path + ".child_value",
                      expected: "boolean",
                      value: input.child_value,
                    }),
                  "boolean" === typeof input.child_next ||
                    $report(_exceptionable, {
                      path: _path + ".child_next",
                      expected: "boolean",
                      value: input.child_next,
                    }),
                  2 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input)
                      .map((key: any) => {
                        if (
                          ["child_value", "child_next"].some(
                            (prop: any) => key === prop,
                          )
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
              const $vo2 = (
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
                  ((("object" === typeof input.child && null !== input.child) ||
                    $report(_exceptionable, {
                      path: _path + ".child",
                      expected: "ObjectGeneric.IChild<number, number>",
                      value: input.child,
                    })) &&
                    $vo3(
                      input.child,
                      _path + ".child",
                      true && _exceptionable,
                    )) ||
                    $report(_exceptionable, {
                      path: _path + ".child",
                      expected: "ObjectGeneric.IChild<number, number>",
                      value: input.child,
                    }),
                  ((Array.isArray(input.elements) ||
                    $report(_exceptionable, {
                      path: _path + ".elements",
                      expected: "Array<ObjectGeneric.IChild<number, number>>",
                      value: input.elements,
                    })) &&
                    input.elements
                      .map(
                        (elem: any, _index2: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path: _path + ".elements[" + _index2 + "]",
                              expected: "ObjectGeneric.IChild<number, number>",
                              value: elem,
                            })) &&
                            $vo3(
                              elem,
                              _path + ".elements[" + _index2 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path: _path + ".elements[" + _index2 + "]",
                            expected: "ObjectGeneric.IChild<number, number>",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".elements",
                      expected: "Array<ObjectGeneric.IChild<number, number>>",
                      value: input.elements,
                    }),
                  3 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input)
                      .map((key: any) => {
                        if (
                          ["value", "child", "elements"].some(
                            (prop: any) => key === prop,
                          )
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
              const $vo3 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ("number" === typeof input.child_value &&
                    Number.isFinite(input.child_value)) ||
                    $report(_exceptionable, {
                      path: _path + ".child_value",
                      expected: "number",
                      value: input.child_value,
                    }),
                  ("number" === typeof input.child_next &&
                    Number.isFinite(input.child_next)) ||
                    $report(_exceptionable, {
                      path: _path + ".child_next",
                      expected: "number",
                      value: input.child_next,
                    }),
                  2 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input)
                      .map((key: any) => {
                        if (
                          ["child_value", "child_next"].some(
                            (prop: any) => key === prop,
                          )
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
              const $vo4 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "string" === typeof input.value ||
                    $report(_exceptionable, {
                      path: _path + ".value",
                      expected: "string",
                      value: input.value,
                    }),
                  ((("object" === typeof input.child && null !== input.child) ||
                    $report(_exceptionable, {
                      path: _path + ".child",
                      expected: "ObjectGeneric.IChild<string, string>",
                      value: input.child,
                    })) &&
                    $vo5(
                      input.child,
                      _path + ".child",
                      true && _exceptionable,
                    )) ||
                    $report(_exceptionable, {
                      path: _path + ".child",
                      expected: "ObjectGeneric.IChild<string, string>",
                      value: input.child,
                    }),
                  ((Array.isArray(input.elements) ||
                    $report(_exceptionable, {
                      path: _path + ".elements",
                      expected: "Array<ObjectGeneric.IChild<string, string>>",
                      value: input.elements,
                    })) &&
                    input.elements
                      .map(
                        (elem: any, _index3: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path: _path + ".elements[" + _index3 + "]",
                              expected: "ObjectGeneric.IChild<string, string>",
                              value: elem,
                            })) &&
                            $vo5(
                              elem,
                              _path + ".elements[" + _index3 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path: _path + ".elements[" + _index3 + "]",
                            expected: "ObjectGeneric.IChild<string, string>",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".elements",
                      expected: "Array<ObjectGeneric.IChild<string, string>>",
                      value: input.elements,
                    }),
                  3 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input)
                      .map((key: any) => {
                        if (
                          ["value", "child", "elements"].some(
                            (prop: any) => key === prop,
                          )
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
              const $vo5 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "string" === typeof input.child_value ||
                    $report(_exceptionable, {
                      path: _path + ".child_value",
                      expected: "string",
                      value: input.child_value,
                    }),
                  "string" === typeof input.child_next ||
                    $report(_exceptionable, {
                      path: _path + ".child_next",
                      expected: "string",
                      value: input.child_next,
                    }),
                  2 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input)
                      .map((key: any) => {
                        if (
                          ["child_value", "child_next"].some(
                            (prop: any) => key === prop,
                          )
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
                ((Array.isArray(input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectGeneric",
                    value: input,
                  })) &&
                  (input.length === 3 ||
                    $report(true, {
                      path: _path + "",
                      expected:
                        "[ObjectGeneric.ISomething<boolean>, ObjectGeneric.ISomething<number>, ObjectGeneric.ISomething<string>]",
                      value: input,
                    })) &&
                  [
                    ((("object" === typeof input[0] && null !== input[0]) ||
                      $report(true, {
                        path: _path + "[0]",
                        expected: "ObjectGeneric.ISomething<boolean>",
                        value: input[0],
                      })) &&
                      $vo0(input[0], _path + "[0]", true)) ||
                      $report(true, {
                        path: _path + "[0]",
                        expected: "ObjectGeneric.ISomething<boolean>",
                        value: input[0],
                      }),
                    ((("object" === typeof input[1] && null !== input[1]) ||
                      $report(true, {
                        path: _path + "[1]",
                        expected: "ObjectGeneric.ISomething<number>",
                        value: input[1],
                      })) &&
                      $vo2(input[1], _path + "[1]", true)) ||
                      $report(true, {
                        path: _path + "[1]",
                        expected: "ObjectGeneric.ISomething<number>",
                        value: input[1],
                      }),
                    ((("object" === typeof input[2] && null !== input[2]) ||
                      $report(true, {
                        path: _path + "[2]",
                        expected: "ObjectGeneric.ISomething<string>",
                        value: input[2],
                      })) &&
                      $vo4(input[2], _path + "[2]", true)) ||
                      $report(true, {
                        path: _path + "[2]",
                        expected: "ObjectGeneric.ISomething<string>",
                        value: input[2],
                      }),
                  ].every((flag: boolean) => flag)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectGeneric",
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

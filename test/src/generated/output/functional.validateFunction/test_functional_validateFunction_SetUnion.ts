import typia from "typia";
import { _test_functional_validateFunction } from "../../../internal/_test_functional_validateFunction";
import { SetUnion } from "../../../structures/SetUnion";
export const test_functional_validateFunction_SetUnion =
  _test_functional_validateFunction("SetUnion")(SetUnion)(
    (p: (input: SetUnion) => SetUnion) =>
      (input: SetUnion): import("typia").IValidation<SetUnion> => {
        const paramResults = [
          ((input: any): typia.IValidation<SetUnion> => {
            const errors = [] as any[];
            const __is = (input: any): input is SetUnion => {
              const $io0 = (input: any): boolean =>
                "string" === typeof input.id &&
                "string" === typeof input.name &&
                "number" === typeof input.age &&
                Number.isFinite(input.age);
              return (
                Array.isArray(input) &&
                input.every(
                  (elem: any) =>
                    elem instanceof Set &&
                    (() => {
                      const array = [...elem];
                      const top = elem.values().next().value;
                      if (0 === elem.size) return true;
                      const arrayPredicators = [
                        [
                          (top: any[]): any => "boolean" === typeof top,
                          (entire: any[]): any =>
                            entire.every(
                              (elem: any) => "boolean" === typeof elem,
                            ),
                        ] as const,
                        [
                          (top: any[]): any =>
                            "number" === typeof top && Number.isFinite(top),
                          (entire: any[]): any =>
                            entire.every(
                              (elem: any) =>
                                "number" === typeof elem &&
                                Number.isFinite(elem),
                            ),
                        ] as const,
                        [
                          (top: any[]): any => "string" === typeof top,
                          (entire: any[]): any =>
                            entire.every(
                              (elem: any) => "string" === typeof elem,
                            ),
                        ] as const,
                        [
                          (top: any[]): any =>
                            Array.isArray(top) &&
                            top.every(
                              (elem: any) =>
                                "number" === typeof elem &&
                                Number.isFinite(elem),
                            ),
                          (entire: any[]): any =>
                            entire.every(
                              (elem: any) =>
                                Array.isArray(elem) &&
                                elem.every(
                                  (elem: any) =>
                                    "number" === typeof elem &&
                                    Number.isFinite(elem),
                                ),
                            ),
                        ] as const,
                        [
                          (top: any[]): any =>
                            "object" === typeof top &&
                            null !== top &&
                            $io0(top),
                          (entire: any[]): any =>
                            entire.every(
                              (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io0(elem),
                            ),
                        ] as const,
                      ];
                      const passed = arrayPredicators.filter((pred: any) =>
                        pred[0](top),
                      );
                      if (1 === passed.length) return passed[0]![1](array);
                      else if (1 < passed.length)
                        for (const pred of passed)
                          if (
                            array.every((value: any) => true === pred[0](value))
                          )
                            return pred[1](array);
                      return false;
                    })(),
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
              ): input is SetUnion => {
                const $vo0 = (
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
                    ("number" === typeof input.age &&
                      Number.isFinite(input.age)) ||
                      $report(_exceptionable, {
                        path: _path + ".age",
                        expected: "number",
                        value: input.age,
                      }),
                  ].every((flag: boolean) => flag);
                return (
                  ((Array.isArray(input) ||
                    $report(true, {
                      path: _path + "",
                      expected: "SetUnion",
                      value: input,
                    })) &&
                    input
                      .map(
                        (elem: any, _index1: number) =>
                          ((elem instanceof Set ||
                            $report(true, {
                              path: _path + "[" + _index1 + "]",
                              expected:
                                "(Set<Array<number>> | Set<SetUnion.Person> | Set<boolean> | Set<number> | Set<string>)",
                              value: elem,
                            })) &&
                            (() => {
                              const array = [...elem];
                              const top = elem.values().next().value;
                              if (0 === elem.size) return true;
                              const arrayPredicators = [
                                [
                                  (top: any[]): any => "boolean" === typeof top,
                                  (entire: any[]): any =>
                                    entire
                                      .map(
                                        (elem: any, _index2: number) =>
                                          "boolean" === typeof elem ||
                                          $report(true, {
                                            path:
                                              _path +
                                              "[" +
                                              _index1 +
                                              "][" +
                                              _index2 +
                                              "]",
                                            expected: "boolean",
                                            value: elem,
                                          }),
                                      )
                                      .every((flag: boolean) => flag),
                                ] as const,
                                [
                                  (top: any[]): any =>
                                    "number" === typeof top &&
                                    Number.isFinite(top),
                                  (entire: any[]): any =>
                                    entire
                                      .map(
                                        (elem: any, _index3: number) =>
                                          ("number" === typeof elem &&
                                            Number.isFinite(elem)) ||
                                          $report(true, {
                                            path:
                                              _path +
                                              "[" +
                                              _index1 +
                                              "][" +
                                              _index3 +
                                              "]",
                                            expected: "number",
                                            value: elem,
                                          }),
                                      )
                                      .every((flag: boolean) => flag),
                                ] as const,
                                [
                                  (top: any[]): any => "string" === typeof top,
                                  (entire: any[]): any =>
                                    entire
                                      .map(
                                        (elem: any, _index4: number) =>
                                          "string" === typeof elem ||
                                          $report(true, {
                                            path:
                                              _path +
                                              "[" +
                                              _index1 +
                                              "][" +
                                              _index4 +
                                              "]",
                                            expected: "string",
                                            value: elem,
                                          }),
                                      )
                                      .every((flag: boolean) => flag),
                                ] as const,
                                [
                                  (top: any[]): any =>
                                    Array.isArray(top) &&
                                    top
                                      .map(
                                        (elem: any, _index5: number) =>
                                          "number" === typeof elem &&
                                          Number.isFinite(elem),
                                      )
                                      .every((flag: boolean) => flag),
                                  (entire: any[]): any =>
                                    entire
                                      .map(
                                        (elem: any, _index6: number) =>
                                          ((Array.isArray(elem) ||
                                            $report(true, {
                                              path:
                                                _path +
                                                "[" +
                                                _index1 +
                                                "][" +
                                                _index6 +
                                                "]",
                                              expected: "Array<number>",
                                              value: elem,
                                            })) &&
                                            elem
                                              .map(
                                                (elem: any, _index7: number) =>
                                                  ("number" === typeof elem &&
                                                    Number.isFinite(elem)) ||
                                                  $report(true, {
                                                    path:
                                                      _path +
                                                      "[" +
                                                      _index1 +
                                                      "][" +
                                                      _index6 +
                                                      "][" +
                                                      _index7 +
                                                      "]",
                                                    expected: "number",
                                                    value: elem,
                                                  }),
                                              )
                                              .every(
                                                (flag: boolean) => flag,
                                              )) ||
                                          $report(true, {
                                            path:
                                              _path +
                                              "[" +
                                              _index1 +
                                              "][" +
                                              _index6 +
                                              "]",
                                            expected: "Array<number>",
                                            value: elem,
                                          }),
                                      )
                                      .every((flag: boolean) => flag),
                                ] as const,
                                [
                                  (top: any[]): any =>
                                    "object" === typeof top &&
                                    null !== top &&
                                    $vo0(top, _path, false),
                                  (entire: any[]): any =>
                                    entire
                                      .map(
                                        (elem: any, _index8: number) =>
                                          ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(true, {
                                              path:
                                                _path +
                                                "[" +
                                                _index1 +
                                                "][" +
                                                _index8 +
                                                "]",
                                              expected: "SetUnion.Person",
                                              value: elem,
                                            })) &&
                                            $vo0(
                                              elem,
                                              _path +
                                                "[" +
                                                _index1 +
                                                "][" +
                                                _index8 +
                                                "]",
                                              true,
                                            )) ||
                                          $report(true, {
                                            path:
                                              _path +
                                              "[" +
                                              _index1 +
                                              "][" +
                                              _index8 +
                                              "]",
                                            expected: "SetUnion.Person",
                                            value: elem,
                                          }),
                                      )
                                      .every((flag: boolean) => flag),
                                ] as const,
                              ];
                              const passed = arrayPredicators.filter(
                                (pred: any) => pred[0](top),
                              );
                              if (1 === passed.length)
                                return passed[0]![1](array);
                              else if (1 < passed.length)
                                for (const pred of passed)
                                  if (
                                    array.every(
                                      (value: any) => true === pred[0](value),
                                    )
                                  )
                                    return pred[1](array);
                              return $report(_exceptionable, {
                                path: _path + "[" + _index1 + "]",
                                expected:
                                  "(Set<boolean> | Set<number> | Set<string> | Set<Array<number>> | Set<SetUnion.Person>)",
                                value: elem,
                              });
                            })()) ||
                          $report(true, {
                            path: _path + "[" + _index1 + "]",
                            expected:
                              "(Set<Array<number>> | Set<SetUnion.Person> | Set<boolean> | Set<number> | Set<string>)",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "SetUnion",
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
        const result = ((input: any): typia.IValidation<SetUnion> => {
          const errors = [] as any[];
          const __is = (input: any): input is SetUnion => {
            const $io0 = (input: any): boolean =>
              "string" === typeof input.id &&
              "string" === typeof input.name &&
              "number" === typeof input.age &&
              Number.isFinite(input.age);
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any) =>
                  elem instanceof Set &&
                  (() => {
                    const array = [...elem];
                    const top = elem.values().next().value;
                    if (0 === elem.size) return true;
                    const arrayPredicators = [
                      [
                        (top: any[]): any => "boolean" === typeof top,
                        (entire: any[]): any =>
                          entire.every(
                            (elem: any) => "boolean" === typeof elem,
                          ),
                      ] as const,
                      [
                        (top: any[]): any =>
                          "number" === typeof top && Number.isFinite(top),
                        (entire: any[]): any =>
                          entire.every(
                            (elem: any) =>
                              "number" === typeof elem && Number.isFinite(elem),
                          ),
                      ] as const,
                      [
                        (top: any[]): any => "string" === typeof top,
                        (entire: any[]): any =>
                          entire.every((elem: any) => "string" === typeof elem),
                      ] as const,
                      [
                        (top: any[]): any =>
                          Array.isArray(top) &&
                          top.every(
                            (elem: any) =>
                              "number" === typeof elem && Number.isFinite(elem),
                          ),
                        (entire: any[]): any =>
                          entire.every(
                            (elem: any) =>
                              Array.isArray(elem) &&
                              elem.every(
                                (elem: any) =>
                                  "number" === typeof elem &&
                                  Number.isFinite(elem),
                              ),
                          ),
                      ] as const,
                      [
                        (top: any[]): any =>
                          "object" === typeof top && null !== top && $io0(top),
                        (entire: any[]): any =>
                          entire.every(
                            (elem: any) =>
                              "object" === typeof elem &&
                              null !== elem &&
                              $io0(elem),
                          ),
                      ] as const,
                    ];
                    const passed = arrayPredicators.filter((pred: any) =>
                      pred[0](top),
                    );
                    if (1 === passed.length) return passed[0]![1](array);
                    else if (1 < passed.length)
                      for (const pred of passed)
                        if (
                          array.every((value: any) => true === pred[0](value))
                        )
                          return pred[1](array);
                    return false;
                  })(),
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
            ): input is SetUnion => {
              const $vo0 = (
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
                  ("number" === typeof input.age &&
                    Number.isFinite(input.age)) ||
                    $report(_exceptionable, {
                      path: _path + ".age",
                      expected: "number",
                      value: input.age,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((Array.isArray(input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "SetUnion",
                    value: input,
                  })) &&
                  input
                    .map(
                      (elem: any, _index1: number) =>
                        ((elem instanceof Set ||
                          $report(true, {
                            path: _path + "[" + _index1 + "]",
                            expected:
                              "(Set<Array<number>> | Set<SetUnion.Person> | Set<boolean> | Set<number> | Set<string>)",
                            value: elem,
                          })) &&
                          (() => {
                            const array = [...elem];
                            const top = elem.values().next().value;
                            if (0 === elem.size) return true;
                            const arrayPredicators = [
                              [
                                (top: any[]): any => "boolean" === typeof top,
                                (entire: any[]): any =>
                                  entire
                                    .map(
                                      (elem: any, _index2: number) =>
                                        "boolean" === typeof elem ||
                                        $report(true, {
                                          path:
                                            _path +
                                            "[" +
                                            _index1 +
                                            "][" +
                                            _index2 +
                                            "]",
                                          expected: "boolean",
                                          value: elem,
                                        }),
                                    )
                                    .every((flag: boolean) => flag),
                              ] as const,
                              [
                                (top: any[]): any =>
                                  "number" === typeof top &&
                                  Number.isFinite(top),
                                (entire: any[]): any =>
                                  entire
                                    .map(
                                      (elem: any, _index3: number) =>
                                        ("number" === typeof elem &&
                                          Number.isFinite(elem)) ||
                                        $report(true, {
                                          path:
                                            _path +
                                            "[" +
                                            _index1 +
                                            "][" +
                                            _index3 +
                                            "]",
                                          expected: "number",
                                          value: elem,
                                        }),
                                    )
                                    .every((flag: boolean) => flag),
                              ] as const,
                              [
                                (top: any[]): any => "string" === typeof top,
                                (entire: any[]): any =>
                                  entire
                                    .map(
                                      (elem: any, _index4: number) =>
                                        "string" === typeof elem ||
                                        $report(true, {
                                          path:
                                            _path +
                                            "[" +
                                            _index1 +
                                            "][" +
                                            _index4 +
                                            "]",
                                          expected: "string",
                                          value: elem,
                                        }),
                                    )
                                    .every((flag: boolean) => flag),
                              ] as const,
                              [
                                (top: any[]): any =>
                                  Array.isArray(top) &&
                                  top
                                    .map(
                                      (elem: any, _index5: number) =>
                                        "number" === typeof elem &&
                                        Number.isFinite(elem),
                                    )
                                    .every((flag: boolean) => flag),
                                (entire: any[]): any =>
                                  entire
                                    .map(
                                      (elem: any, _index6: number) =>
                                        ((Array.isArray(elem) ||
                                          $report(true, {
                                            path:
                                              _path +
                                              "[" +
                                              _index1 +
                                              "][" +
                                              _index6 +
                                              "]",
                                            expected: "Array<number>",
                                            value: elem,
                                          })) &&
                                          elem
                                            .map(
                                              (elem: any, _index7: number) =>
                                                ("number" === typeof elem &&
                                                  Number.isFinite(elem)) ||
                                                $report(true, {
                                                  path:
                                                    _path +
                                                    "[" +
                                                    _index1 +
                                                    "][" +
                                                    _index6 +
                                                    "][" +
                                                    _index7 +
                                                    "]",
                                                  expected: "number",
                                                  value: elem,
                                                }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                        $report(true, {
                                          path:
                                            _path +
                                            "[" +
                                            _index1 +
                                            "][" +
                                            _index6 +
                                            "]",
                                          expected: "Array<number>",
                                          value: elem,
                                        }),
                                    )
                                    .every((flag: boolean) => flag),
                              ] as const,
                              [
                                (top: any[]): any =>
                                  "object" === typeof top &&
                                  null !== top &&
                                  $vo0(top, _path, false),
                                (entire: any[]): any =>
                                  entire
                                    .map(
                                      (elem: any, _index8: number) =>
                                        ((("object" === typeof elem &&
                                          null !== elem) ||
                                          $report(true, {
                                            path:
                                              _path +
                                              "[" +
                                              _index1 +
                                              "][" +
                                              _index8 +
                                              "]",
                                            expected: "SetUnion.Person",
                                            value: elem,
                                          })) &&
                                          $vo0(
                                            elem,
                                            _path +
                                              "[" +
                                              _index1 +
                                              "][" +
                                              _index8 +
                                              "]",
                                            true,
                                          )) ||
                                        $report(true, {
                                          path:
                                            _path +
                                            "[" +
                                            _index1 +
                                            "][" +
                                            _index8 +
                                            "]",
                                          expected: "SetUnion.Person",
                                          value: elem,
                                        }),
                                    )
                                    .every((flag: boolean) => flag),
                              ] as const,
                            ];
                            const passed = arrayPredicators.filter(
                              (pred: any) => pred[0](top),
                            );
                            if (1 === passed.length)
                              return passed[0]![1](array);
                            else if (1 < passed.length)
                              for (const pred of passed)
                                if (
                                  array.every(
                                    (value: any) => true === pred[0](value),
                                  )
                                )
                                  return pred[1](array);
                            return $report(_exceptionable, {
                              path: _path + "[" + _index1 + "]",
                              expected:
                                "(Set<boolean> | Set<number> | Set<string> | Set<Array<number>> | Set<SetUnion.Person>)",
                              value: elem,
                            });
                          })()) ||
                        $report(true, {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "(Set<Array<number>> | Set<SetUnion.Person> | Set<boolean> | Set<number> | Set<string>)",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                $report(true, {
                  path: _path + "",
                  expected: "SetUnion",
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

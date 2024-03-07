import typia from "typia";
import { _test_functional_validateReturn } from "../../../internal/_test_functional_validateReturn";
import { ArrayRepeatedUnion } from "../../../structures/ArrayRepeatedUnion";
export const test_functional_validateReturn_ArrayRepeatedUnion =
  _test_functional_validateReturn("ArrayRepeatedUnion")(ArrayRepeatedUnion)(
    (p: (input: ArrayRepeatedUnion) => ArrayRepeatedUnion) =>
      (
        input: ArrayRepeatedUnion,
      ): import("typia").IValidation<ArrayRepeatedUnion> => {
        const result = ((input: any): typia.IValidation<ArrayRepeatedUnion> => {
          const errors = [] as any[];
          const __is = (input: any): input is ArrayRepeatedUnion => {
            const $ip0 = (input: any) => {
              const array = input;
              const top = input[0];
              if (0 === input.length) return true;
              const arrayPredicators = [
                [
                  (top: any[]): any => "string" === typeof top,
                  (entire: any[]): any =>
                    entire.every((elem: any) => "string" === typeof elem),
                ] as const,
                [
                  (top: any[]): any =>
                    null !== top &&
                    undefined !== top &&
                    (("number" === typeof top && Number.isFinite(top)) ||
                      "boolean" === typeof top ||
                      (Array.isArray(top) && ($ip0(top) || false))),
                  (entire: any[]): any => $ia0(entire) || false,
                ] as const,
                [
                  (top: any[]): any =>
                    "object" === typeof top && null !== top && $io0(top),
                  (entire: any[]): any =>
                    entire.every(
                      (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                    ),
                ] as const,
              ];
              const passed = arrayPredicators.filter((pred: any) =>
                pred[0](top),
              );
              if (1 === passed.length) return passed[0]![1](array);
              else if (1 < passed.length)
                for (const pred of passed)
                  if (array.every((value: any) => true === pred[0](value)))
                    return pred[1](array);
              return false;
            };
            const $io0 = (input: any): boolean =>
              "object" === typeof input.scale &&
              null !== input.scale &&
              "number" === typeof (input.scale as any).x &&
              Number.isFinite((input.scale as any).x) &&
              "number" === typeof (input.scale as any).y &&
              Number.isFinite((input.scale as any).y) &&
              "number" === typeof (input.scale as any).z &&
              Number.isFinite((input.scale as any).z) &&
              "object" === typeof input.position &&
              null !== input.position &&
              "number" === typeof (input.position as any).x &&
              Number.isFinite((input.position as any).x) &&
              "number" === typeof (input.position as any).y &&
              Number.isFinite((input.position as any).y) &&
              "number" === typeof (input.position as any).z &&
              Number.isFinite((input.position as any).z) &&
              "object" === typeof input.rotate &&
              null !== input.rotate &&
              "number" === typeof (input.rotate as any).x &&
              Number.isFinite((input.rotate as any).x) &&
              "number" === typeof (input.rotate as any).y &&
              Number.isFinite((input.rotate as any).y) &&
              "number" === typeof (input.rotate as any).z &&
              Number.isFinite((input.rotate as any).z) &&
              "object" === typeof input.pivot &&
              null !== input.pivot &&
              "number" === typeof (input.pivot as any).x &&
              Number.isFinite((input.pivot as any).x) &&
              "number" === typeof (input.pivot as any).y &&
              Number.isFinite((input.pivot as any).y) &&
              "number" === typeof (input.pivot as any).z &&
              Number.isFinite((input.pivot as any).z);
            const $ia0 = (input: any): any =>
              input.every(
                (elem: any) =>
                  null !== elem &&
                  undefined !== elem &&
                  (("number" === typeof elem && Number.isFinite(elem)) ||
                    "boolean" === typeof elem ||
                    (Array.isArray(elem) && ($ip0(elem) || false))),
              );
            return (
              null !== input &&
              undefined !== input &&
              (("number" === typeof input && Number.isFinite(input)) ||
                "boolean" === typeof input ||
                (Array.isArray(input) && ($ip0(input) || false)))
            );
          };
          if (false === __is(input)) {
            const $report = (typia.functional.validateReturn as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ArrayRepeatedUnion => {
              const $vp0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ) => {
                const array = input;
                const top = input[0];
                if (0 === input.length) return true;
                const arrayPredicators = [
                  [
                    (top: any[]): any => "string" === typeof top,
                    (entire: any[]): any =>
                      entire
                        .map(
                          (elem: any, _index1: number) =>
                            "string" === typeof elem ||
                            $report(_exceptionable, {
                              path: _path + "[" + _index1 + "]",
                              expected: "string",
                              value: elem,
                            }),
                        )
                        .every((flag: boolean) => flag),
                  ] as const,
                  [
                    (top: any[]): any =>
                      null !== top &&
                      undefined !== top &&
                      (("number" === typeof top && Number.isFinite(top)) ||
                        "boolean" === typeof top ||
                        (Array.isArray(top) &&
                          ($vp0(top, _path, false && _exceptionable) ||
                            $report(_exceptionable, {
                              path: _path,
                              expected:
                                "Array<string> | Array<ArrayRepeatedUnion> | Array<ArrayRepeatedUnion.IBox3D>",
                              value: top,
                            })))),
                    (entire: any[]): any =>
                      $va0(entire, _path, true && _exceptionable) ||
                      $report(_exceptionable, {
                        path: _path,
                        expected: "Array<ArrayRepeatedUnion>",
                        value: entire,
                      }),
                  ] as const,
                  [
                    (top: any[]): any =>
                      "object" === typeof top &&
                      null !== top &&
                      $vo0(top, _path, false && _exceptionable),
                    (entire: any[]): any =>
                      entire
                        .map(
                          (elem: any, _index2: number) =>
                            ((("object" === typeof elem && null !== elem) ||
                              $report(_exceptionable, {
                                path: _path + "[" + _index2 + "]",
                                expected: "ArrayRepeatedUnion.IBox3D",
                                value: elem,
                              })) &&
                              $vo0(
                                elem,
                                _path + "[" + _index2 + "]",
                                true && _exceptionable,
                              )) ||
                            $report(_exceptionable, {
                              path: _path + "[" + _index2 + "]",
                              expected: "ArrayRepeatedUnion.IBox3D",
                              value: elem,
                            }),
                        )
                        .every((flag: boolean) => flag),
                  ] as const,
                ];
                const passed = arrayPredicators.filter((pred: any) =>
                  pred[0](top),
                );
                if (1 === passed.length) return passed[0]![1](array);
                else if (1 < passed.length)
                  for (const pred of passed)
                    if (array.every((value: any) => true === pred[0](value)))
                      return pred[1](array);
                return $report(_exceptionable, {
                  path: _path,
                  expected:
                    "(Array<string> | Array<ArrayRepeatedUnion> | Array<ArrayRepeatedUnion.IBox3D>)",
                  value: input,
                });
              };
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ((("object" === typeof input.scale && null !== input.scale) ||
                    $report(_exceptionable, {
                      path: _path + ".scale",
                      expected: "ArrayRepeatedUnion.IPoint3D",
                      value: input.scale,
                    })) &&
                    $vo1(
                      input.scale,
                      _path + ".scale",
                      true && _exceptionable,
                    )) ||
                    $report(_exceptionable, {
                      path: _path + ".scale",
                      expected: "ArrayRepeatedUnion.IPoint3D",
                      value: input.scale,
                    }),
                  ((("object" === typeof input.position &&
                    null !== input.position) ||
                    $report(_exceptionable, {
                      path: _path + ".position",
                      expected: "ArrayRepeatedUnion.IPoint3D",
                      value: input.position,
                    })) &&
                    $vo1(
                      input.position,
                      _path + ".position",
                      true && _exceptionable,
                    )) ||
                    $report(_exceptionable, {
                      path: _path + ".position",
                      expected: "ArrayRepeatedUnion.IPoint3D",
                      value: input.position,
                    }),
                  ((("object" === typeof input.rotate &&
                    null !== input.rotate) ||
                    $report(_exceptionable, {
                      path: _path + ".rotate",
                      expected: "ArrayRepeatedUnion.IPoint3D",
                      value: input.rotate,
                    })) &&
                    $vo1(
                      input.rotate,
                      _path + ".rotate",
                      true && _exceptionable,
                    )) ||
                    $report(_exceptionable, {
                      path: _path + ".rotate",
                      expected: "ArrayRepeatedUnion.IPoint3D",
                      value: input.rotate,
                    }),
                  ((("object" === typeof input.pivot && null !== input.pivot) ||
                    $report(_exceptionable, {
                      path: _path + ".pivot",
                      expected: "ArrayRepeatedUnion.IPoint3D",
                      value: input.pivot,
                    })) &&
                    $vo1(
                      input.pivot,
                      _path + ".pivot",
                      true && _exceptionable,
                    )) ||
                    $report(_exceptionable, {
                      path: _path + ".pivot",
                      expected: "ArrayRepeatedUnion.IPoint3D",
                      value: input.pivot,
                    }),
                ].every((flag: boolean) => flag);
              const $vo1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ("number" === typeof input.x && Number.isFinite(input.x)) ||
                    $report(_exceptionable, {
                      path: _path + ".x",
                      expected: "number",
                      value: input.x,
                    }),
                  ("number" === typeof input.y && Number.isFinite(input.y)) ||
                    $report(_exceptionable, {
                      path: _path + ".y",
                      expected: "number",
                      value: input.y,
                    }),
                  ("number" === typeof input.z && Number.isFinite(input.z)) ||
                    $report(_exceptionable, {
                      path: _path + ".z",
                      expected: "number",
                      value: input.z,
                    }),
                ].every((flag: boolean) => flag);
              const $va0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): any =>
                input
                  .map(
                    (elem: any, _index3: number) =>
                      (null !== elem ||
                        $report(_exceptionable, {
                          path: _path + "[" + _index3 + "]",
                          expected:
                            "(Array<ArrayRepeatedUnion.IBox3D> | Array<ArrayRepeatedUnion> | Array<string> | boolean | number)",
                          value: elem,
                        })) &&
                      (undefined !== elem ||
                        $report(_exceptionable, {
                          path: _path + "[" + _index3 + "]",
                          expected:
                            "(Array<ArrayRepeatedUnion.IBox3D> | Array<ArrayRepeatedUnion> | Array<string> | boolean | number)",
                          value: elem,
                        })) &&
                      (("number" === typeof elem && Number.isFinite(elem)) ||
                        "boolean" === typeof elem ||
                        ((Array.isArray(elem) ||
                          $report(_exceptionable, {
                            path: _path + "[" + _index3 + "]",
                            expected:
                              "(Array<ArrayRepeatedUnion.IBox3D> | Array<ArrayRepeatedUnion> | Array<string> | boolean | number)",
                            value: elem,
                          })) &&
                          ($vp0(
                            elem,
                            _path + "[" + _index3 + "]",
                            true && _exceptionable,
                          ) ||
                            $report(_exceptionable, {
                              path: _path + "[" + _index3 + "]",
                              expected:
                                "Array<string> | Array<ArrayRepeatedUnion> | Array<ArrayRepeatedUnion.IBox3D>",
                              value: elem,
                            }))) ||
                        $report(_exceptionable, {
                          path: _path + "[" + _index3 + "]",
                          expected:
                            "(Array<ArrayRepeatedUnion.IBox3D> | Array<ArrayRepeatedUnion> | Array<string> | boolean | number)",
                          value: elem,
                        })),
                  )
                  .every((flag: boolean) => flag);
              return (
                (null !== input ||
                  $report(true, {
                    path: _path + "",
                    expected:
                      "(Array<ArrayRepeatedUnion.IBox3D> | Array<ArrayRepeatedUnion> | Array<string> | boolean | number)",
                    value: input,
                  })) &&
                (undefined !== input ||
                  $report(true, {
                    path: _path + "",
                    expected:
                      "(Array<ArrayRepeatedUnion.IBox3D> | Array<ArrayRepeatedUnion> | Array<string> | boolean | number)",
                    value: input,
                  })) &&
                (("number" === typeof input && Number.isFinite(input)) ||
                  "boolean" === typeof input ||
                  ((Array.isArray(input) ||
                    $report(true, {
                      path: _path + "",
                      expected:
                        "(Array<ArrayRepeatedUnion.IBox3D> | Array<ArrayRepeatedUnion> | Array<string> | boolean | number)",
                      value: input,
                    })) &&
                    ($vp0(input, _path + "", true && _exceptionable) ||
                      $report(_exceptionable, {
                        path: _path + "",
                        expected:
                          "Array<string> | Array<ArrayRepeatedUnion> | Array<ArrayRepeatedUnion.IBox3D>",
                        value: input,
                      }))) ||
                  $report(true, {
                    path: _path + "",
                    expected:
                      "(Array<ArrayRepeatedUnion.IBox3D> | Array<ArrayRepeatedUnion> | Array<string> | boolean | number)",
                    value: input,
                  }))
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

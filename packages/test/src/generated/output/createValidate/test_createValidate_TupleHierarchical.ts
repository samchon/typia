import typia from "typia";

import { _test_validate } from "../../../internal/_test_validate";
import { TupleHierarchical } from "../../../structures/TupleHierarchical";

export const test_createValidate_TupleHierarchical = _test_validate(
  "TupleHierarchical",
)<TupleHierarchical>(TupleHierarchical)(
  (input: any): typia.IValidation<TupleHierarchical> => {
    const errors = [] as any[];
    const __is = (input: any): input is TupleHierarchical => {
      return (
        Array.isArray(input) &&
        input.length === 5 &&
        "boolean" === typeof input[0] &&
        undefined !== input[1] &&
        null === input[1] &&
        "number" === typeof input[2] &&
        Number.isFinite(input[2]) &&
        Array.isArray(input[3]) &&
        input[3].length === 3 &&
        "boolean" === typeof input[3][0] &&
        undefined !== input[3][1] &&
        null === input[3][1] &&
        Array.isArray(input[3][2]) &&
        input[3][2].length === 2 &&
        "number" === typeof input[3][2][0] &&
        Number.isFinite(input[3][2][0]) &&
        Array.isArray(input[3][2][1]) &&
        input[3][2][1].length === 2 &&
        "boolean" === typeof input[3][2][1][0] &&
        "string" === typeof input[3][2][1][1] &&
        Array.isArray(input[4]) &&
        input[4].length === 2 &&
        "number" === typeof input[4][0] &&
        Number.isFinite(input[4][0]) &&
        Array.isArray(input[4][1]) &&
        input[4][1].every(
          (elem: any) =>
            Array.isArray(elem) &&
            elem.length === 3 &&
            "string" === typeof elem[0] &&
            "boolean" === typeof elem[1] &&
            Array.isArray(elem[2]) &&
            elem[2].every(
              (elem: any) =>
                Array.isArray(elem) &&
                elem.length === 3 &&
                "number" === typeof elem[0] &&
                Number.isFinite(elem[0]) &&
                "number" === typeof elem[1] &&
                Number.isFinite(elem[1]) &&
                Array.isArray(elem[2]) &&
                elem[2].length === 2 &&
                "boolean" === typeof elem[2][0] &&
                "string" === typeof elem[2][1],
            ),
        )
      );
    };
    if (false === __is(input)) {
      const $report = (typia.createValidate as any).report(errors);
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is TupleHierarchical => {
        return (
          ((Array.isArray(input) ||
            $report(true, {
              path: _path + "",
              expected: "TupleHierarchical",
              value: input,
            })) &&
            (input.length === 5 ||
              $report(true, {
                path: _path + "",
                expected:
                  "[boolean, null, number, [boolean, null, [number, [boolean, string]]], [number, [string, boolean, [number, number, [boolean, string]][]][]]]",
                value: input,
              })) &&
            [
              "boolean" === typeof input[0] ||
                $report(true, {
                  path: _path + "[0]",
                  expected: "boolean",
                  value: input[0],
                }),
              (undefined !== input[1] ||
                $report(true, {
                  path: _path + "[1]",
                  expected: "null",
                  value: input[1],
                })) &&
                (null === input[1] ||
                  $report(true, {
                    path: _path + "[1]",
                    expected: "null",
                    value: input[1],
                  })),
              ("number" === typeof input[2] && Number.isFinite(input[2])) ||
                $report(true, {
                  path: _path + "[2]",
                  expected: "number",
                  value: input[2],
                }),
              ((Array.isArray(input[3]) ||
                $report(true, {
                  path: _path + "[3]",
                  expected: "[boolean, null, [number, [boolean, string]]]",
                  value: input[3],
                })) &&
                (input[3].length === 3 ||
                  $report(true, {
                    path: _path + "[3]",
                    expected: "[boolean, null, [number, [boolean, string]]]",
                    value: input[3],
                  })) &&
                [
                  "boolean" === typeof input[3][0] ||
                    $report(true, {
                      path: _path + "[3][0]",
                      expected: "boolean",
                      value: input[3][0],
                    }),
                  (undefined !== input[3][1] ||
                    $report(true, {
                      path: _path + "[3][1]",
                      expected: "null",
                      value: input[3][1],
                    })) &&
                    (null === input[3][1] ||
                      $report(true, {
                        path: _path + "[3][1]",
                        expected: "null",
                        value: input[3][1],
                      })),
                  ((Array.isArray(input[3][2]) ||
                    $report(true, {
                      path: _path + "[3][2]",
                      expected: "[number, [boolean, string]]",
                      value: input[3][2],
                    })) &&
                    (input[3][2].length === 2 ||
                      $report(true, {
                        path: _path + "[3][2]",
                        expected: "[number, [boolean, string]]",
                        value: input[3][2],
                      })) &&
                    [
                      ("number" === typeof input[3][2][0] &&
                        Number.isFinite(input[3][2][0])) ||
                        $report(true, {
                          path: _path + "[3][2][0]",
                          expected: "number",
                          value: input[3][2][0],
                        }),
                      ((Array.isArray(input[3][2][1]) ||
                        $report(true, {
                          path: _path + "[3][2][1]",
                          expected: "[boolean, string]",
                          value: input[3][2][1],
                        })) &&
                        (input[3][2][1].length === 2 ||
                          $report(true, {
                            path: _path + "[3][2][1]",
                            expected: "[boolean, string]",
                            value: input[3][2][1],
                          })) &&
                        [
                          "boolean" === typeof input[3][2][1][0] ||
                            $report(true, {
                              path: _path + "[3][2][1][0]",
                              expected: "boolean",
                              value: input[3][2][1][0],
                            }),
                          "string" === typeof input[3][2][1][1] ||
                            $report(true, {
                              path: _path + "[3][2][1][1]",
                              expected: "string",
                              value: input[3][2][1][1],
                            }),
                        ].every((flag: boolean) => flag)) ||
                        $report(true, {
                          path: _path + "[3][2][1]",
                          expected: "[boolean, string]",
                          value: input[3][2][1],
                        }),
                    ].every((flag: boolean) => flag)) ||
                    $report(true, {
                      path: _path + "[3][2]",
                      expected: "[number, [boolean, string]]",
                      value: input[3][2],
                    }),
                ].every((flag: boolean) => flag)) ||
                $report(true, {
                  path: _path + "[3]",
                  expected: "[boolean, null, [number, [boolean, string]]]",
                  value: input[3],
                }),
              ((Array.isArray(input[4]) ||
                $report(true, {
                  path: _path + "[4]",
                  expected:
                    "[number, [string, boolean, [number, number, [boolean, string]][]][]]",
                  value: input[4],
                })) &&
                (input[4].length === 2 ||
                  $report(true, {
                    path: _path + "[4]",
                    expected:
                      "[number, Array<[string, boolean, [number, number, [boolean, string]][]]>]",
                    value: input[4],
                  })) &&
                [
                  ("number" === typeof input[4][0] &&
                    Number.isFinite(input[4][0])) ||
                    $report(true, {
                      path: _path + "[4][0]",
                      expected: "number",
                      value: input[4][0],
                    }),
                  ((Array.isArray(input[4][1]) ||
                    $report(true, {
                      path: _path + "[4][1]",
                      expected:
                        "Array<[string, boolean, [number, number, [boolean, string]][]]>",
                      value: input[4][1],
                    })) &&
                    input[4][1]
                      .map(
                        (elem: any, _index1: number) =>
                          ((Array.isArray(elem) ||
                            $report(true, {
                              path: _path + "[4][1][" + _index1 + "]",
                              expected:
                                "[string, boolean, [number, number, [boolean, string]][]]",
                              value: elem,
                            })) &&
                            (elem.length === 3 ||
                              $report(true, {
                                path: _path + "[4][1][" + _index1 + "]",
                                expected:
                                  "[string, boolean, Array<[number, number, [boolean, string]]>]",
                                value: elem,
                              })) &&
                            [
                              "string" === typeof elem[0] ||
                                $report(true, {
                                  path: _path + "[4][1][" + _index1 + "][0]",
                                  expected: "string",
                                  value: elem[0],
                                }),
                              "boolean" === typeof elem[1] ||
                                $report(true, {
                                  path: _path + "[4][1][" + _index1 + "][1]",
                                  expected: "boolean",
                                  value: elem[1],
                                }),
                              ((Array.isArray(elem[2]) ||
                                $report(true, {
                                  path: _path + "[4][1][" + _index1 + "][2]",
                                  expected:
                                    "Array<[number, number, [boolean, string]]>",
                                  value: elem[2],
                                })) &&
                                elem[2]
                                  .map(
                                    (elem: any, _index2: number) =>
                                      ((Array.isArray(elem) ||
                                        $report(true, {
                                          path:
                                            _path +
                                            "[4][1][" +
                                            _index1 +
                                            "][2][" +
                                            _index2 +
                                            "]",
                                          expected:
                                            "[number, number, [boolean, string]]",
                                          value: elem,
                                        })) &&
                                        (elem.length === 3 ||
                                          $report(true, {
                                            path:
                                              _path +
                                              "[4][1][" +
                                              _index1 +
                                              "][2][" +
                                              _index2 +
                                              "]",
                                            expected:
                                              "[number, number, [boolean, string]]",
                                            value: elem,
                                          })) &&
                                        [
                                          ("number" === typeof elem[0] &&
                                            Number.isFinite(elem[0])) ||
                                            $report(true, {
                                              path:
                                                _path +
                                                "[4][1][" +
                                                _index1 +
                                                "][2][" +
                                                _index2 +
                                                "][0]",
                                              expected: "number",
                                              value: elem[0],
                                            }),
                                          ("number" === typeof elem[1] &&
                                            Number.isFinite(elem[1])) ||
                                            $report(true, {
                                              path:
                                                _path +
                                                "[4][1][" +
                                                _index1 +
                                                "][2][" +
                                                _index2 +
                                                "][1]",
                                              expected: "number",
                                              value: elem[1],
                                            }),
                                          ((Array.isArray(elem[2]) ||
                                            $report(true, {
                                              path:
                                                _path +
                                                "[4][1][" +
                                                _index1 +
                                                "][2][" +
                                                _index2 +
                                                "][2]",
                                              expected: "[boolean, string]",
                                              value: elem[2],
                                            })) &&
                                            (elem[2].length === 2 ||
                                              $report(true, {
                                                path:
                                                  _path +
                                                  "[4][1][" +
                                                  _index1 +
                                                  "][2][" +
                                                  _index2 +
                                                  "][2]",
                                                expected: "[boolean, string]",
                                                value: elem[2],
                                              })) &&
                                            [
                                              "boolean" === typeof elem[2][0] ||
                                                $report(true, {
                                                  path:
                                                    _path +
                                                    "[4][1][" +
                                                    _index1 +
                                                    "][2][" +
                                                    _index2 +
                                                    "][2][0]",
                                                  expected: "boolean",
                                                  value: elem[2][0],
                                                }),
                                              "string" === typeof elem[2][1] ||
                                                $report(true, {
                                                  path:
                                                    _path +
                                                    "[4][1][" +
                                                    _index1 +
                                                    "][2][" +
                                                    _index2 +
                                                    "][2][1]",
                                                  expected: "string",
                                                  value: elem[2][1],
                                                }),
                                            ].every((flag: boolean) => flag)) ||
                                            $report(true, {
                                              path:
                                                _path +
                                                "[4][1][" +
                                                _index1 +
                                                "][2][" +
                                                _index2 +
                                                "][2]",
                                              expected: "[boolean, string]",
                                              value: elem[2],
                                            }),
                                        ].every((flag: boolean) => flag)) ||
                                      $report(true, {
                                        path:
                                          _path +
                                          "[4][1][" +
                                          _index1 +
                                          "][2][" +
                                          _index2 +
                                          "]",
                                        expected:
                                          "[number, number, [boolean, string]]",
                                        value: elem,
                                      }),
                                  )
                                  .every((flag: boolean) => flag)) ||
                                $report(true, {
                                  path: _path + "[4][1][" + _index1 + "][2]",
                                  expected:
                                    "Array<[number, number, [boolean, string]]>",
                                  value: elem[2],
                                }),
                            ].every((flag: boolean) => flag)) ||
                          $report(true, {
                            path: _path + "[4][1][" + _index1 + "]",
                            expected:
                              "[string, boolean, [number, number, [boolean, string]][]]",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(true, {
                      path: _path + "[4][1]",
                      expected:
                        "Array<[string, boolean, [number, number, [boolean, string]][]]>",
                      value: input[4][1],
                    }),
                ].every((flag: boolean) => flag)) ||
                $report(true, {
                  path: _path + "[4]",
                  expected:
                    "[number, [string, boolean, [number, number, [boolean, string]][]][]]",
                  value: input[4],
                }),
            ].every((flag: boolean) => flag)) ||
          $report(true, {
            path: _path + "",
            expected: "TupleHierarchical",
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
  },
);

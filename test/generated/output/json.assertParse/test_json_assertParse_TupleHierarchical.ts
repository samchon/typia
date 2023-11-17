import typia from "../../../../src";
import { _test_json_assertParse } from "../../../internal/_test_json_assertParse";
import { TupleHierarchical } from "../../../structures/TupleHierarchical";

export const test_json_assertParse_TupleHierarchical = _test_json_assertParse(
  "TupleHierarchical",
)<TupleHierarchical>(TupleHierarchical)((input) =>
  ((input: string): typia.Primitive<TupleHierarchical> => {
    const assert = (input: any): TupleHierarchical => {
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
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is TupleHierarchical => {
          const $guard = (typia.json.assertParse as any).guard;
          return (
            ((Array.isArray(input) ||
              $guard(true, {
                path: _path + "",
                expected: "TupleHierarchical",
                value: input,
              })) &&
              (input.length === 5 ||
                $guard(true, {
                  path: _path + "",
                  expected:
                    "[boolean, null, number, [boolean, null, [number, [boolean, string]]], [number, [string, boolean, [number, number, [boolean, string]][]][]]]",
                  value: input,
                })) &&
              ("boolean" === typeof input[0] ||
                $guard(true, {
                  path: _path + "[0]",
                  expected: "boolean",
                  value: input[0],
                })) &&
              (undefined !== input[1] ||
                $guard(true, {
                  path: _path + "[1]",
                  expected: "null",
                  value: input[1],
                })) &&
              (null === input[1] ||
                $guard(true, {
                  path: _path + "[1]",
                  expected: "null",
                  value: input[1],
                })) &&
              (("number" === typeof input[2] && Number.isFinite(input[2])) ||
                $guard(true, {
                  path: _path + "[2]",
                  expected: "number",
                  value: input[2],
                })) &&
              (((Array.isArray(input[3]) ||
                $guard(true, {
                  path: _path + "[3]",
                  expected: "[boolean, null, [number, [boolean, string]]]",
                  value: input[3],
                })) &&
                (input[3].length === 3 ||
                  $guard(true, {
                    path: _path + "[3]",
                    expected: "[boolean, null, [number, [boolean, string]]]",
                    value: input[3],
                  })) &&
                ("boolean" === typeof input[3][0] ||
                  $guard(true, {
                    path: _path + "[3][0]",
                    expected: "boolean",
                    value: input[3][0],
                  })) &&
                (undefined !== input[3][1] ||
                  $guard(true, {
                    path: _path + "[3][1]",
                    expected: "null",
                    value: input[3][1],
                  })) &&
                (null === input[3][1] ||
                  $guard(true, {
                    path: _path + "[3][1]",
                    expected: "null",
                    value: input[3][1],
                  })) &&
                (((Array.isArray(input[3][2]) ||
                  $guard(true, {
                    path: _path + "[3][2]",
                    expected: "[number, [boolean, string]]",
                    value: input[3][2],
                  })) &&
                  (input[3][2].length === 2 ||
                    $guard(true, {
                      path: _path + "[3][2]",
                      expected: "[number, [boolean, string]]",
                      value: input[3][2],
                    })) &&
                  (("number" === typeof input[3][2][0] &&
                    Number.isFinite(input[3][2][0])) ||
                    $guard(true, {
                      path: _path + "[3][2][0]",
                      expected: "number",
                      value: input[3][2][0],
                    })) &&
                  (((Array.isArray(input[3][2][1]) ||
                    $guard(true, {
                      path: _path + "[3][2][1]",
                      expected: "[boolean, string]",
                      value: input[3][2][1],
                    })) &&
                    (input[3][2][1].length === 2 ||
                      $guard(true, {
                        path: _path + "[3][2][1]",
                        expected: "[boolean, string]",
                        value: input[3][2][1],
                      })) &&
                    ("boolean" === typeof input[3][2][1][0] ||
                      $guard(true, {
                        path: _path + "[3][2][1][0]",
                        expected: "boolean",
                        value: input[3][2][1][0],
                      })) &&
                    ("string" === typeof input[3][2][1][1] ||
                      $guard(true, {
                        path: _path + "[3][2][1][1]",
                        expected: "string",
                        value: input[3][2][1][1],
                      }))) ||
                    $guard(true, {
                      path: _path + "[3][2][1]",
                      expected: "[boolean, string]",
                      value: input[3][2][1],
                    }))) ||
                  $guard(true, {
                    path: _path + "[3][2]",
                    expected: "[number, [boolean, string]]",
                    value: input[3][2],
                  }))) ||
                $guard(true, {
                  path: _path + "[3]",
                  expected: "[boolean, null, [number, [boolean, string]]]",
                  value: input[3],
                })) &&
              (((Array.isArray(input[4]) ||
                $guard(true, {
                  path: _path + "[4]",
                  expected:
                    "[number, [string, boolean, [number, number, [boolean, string]][]][]]",
                  value: input[4],
                })) &&
                (input[4].length === 2 ||
                  $guard(true, {
                    path: _path + "[4]",
                    expected:
                      "[number, Array<[string, boolean, [number, number, [boolean, string]][]]>]",
                    value: input[4],
                  })) &&
                (("number" === typeof input[4][0] &&
                  Number.isFinite(input[4][0])) ||
                  $guard(true, {
                    path: _path + "[4][0]",
                    expected: "number",
                    value: input[4][0],
                  })) &&
                (((Array.isArray(input[4][1]) ||
                  $guard(true, {
                    path: _path + "[4][1]",
                    expected:
                      "Array<[string, boolean, [number, number, [boolean, string]][]]>",
                    value: input[4][1],
                  })) &&
                  input[4][1].every(
                    (elem: any, _index1: number) =>
                      ((Array.isArray(elem) ||
                        $guard(true, {
                          path: _path + "[4][1][" + _index1 + "]",
                          expected:
                            "[string, boolean, [number, number, [boolean, string]][]]",
                          value: elem,
                        })) &&
                        (elem.length === 3 ||
                          $guard(true, {
                            path: _path + "[4][1][" + _index1 + "]",
                            expected:
                              "[string, boolean, Array<[number, number, [boolean, string]]>]",
                            value: elem,
                          })) &&
                        ("string" === typeof elem[0] ||
                          $guard(true, {
                            path: _path + "[4][1][" + _index1 + "][0]",
                            expected: "string",
                            value: elem[0],
                          })) &&
                        ("boolean" === typeof elem[1] ||
                          $guard(true, {
                            path: _path + "[4][1][" + _index1 + "][1]",
                            expected: "boolean",
                            value: elem[1],
                          })) &&
                        (((Array.isArray(elem[2]) ||
                          $guard(true, {
                            path: _path + "[4][1][" + _index1 + "][2]",
                            expected:
                              "Array<[number, number, [boolean, string]]>",
                            value: elem[2],
                          })) &&
                          elem[2].every(
                            (elem: any, _index2: number) =>
                              ((Array.isArray(elem) ||
                                $guard(true, {
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
                                  $guard(true, {
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
                                (("number" === typeof elem[0] &&
                                  Number.isFinite(elem[0])) ||
                                  $guard(true, {
                                    path:
                                      _path +
                                      "[4][1][" +
                                      _index1 +
                                      "][2][" +
                                      _index2 +
                                      "][0]",
                                    expected: "number",
                                    value: elem[0],
                                  })) &&
                                (("number" === typeof elem[1] &&
                                  Number.isFinite(elem[1])) ||
                                  $guard(true, {
                                    path:
                                      _path +
                                      "[4][1][" +
                                      _index1 +
                                      "][2][" +
                                      _index2 +
                                      "][1]",
                                    expected: "number",
                                    value: elem[1],
                                  })) &&
                                (((Array.isArray(elem[2]) ||
                                  $guard(true, {
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
                                    $guard(true, {
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
                                  ("boolean" === typeof elem[2][0] ||
                                    $guard(true, {
                                      path:
                                        _path +
                                        "[4][1][" +
                                        _index1 +
                                        "][2][" +
                                        _index2 +
                                        "][2][0]",
                                      expected: "boolean",
                                      value: elem[2][0],
                                    })) &&
                                  ("string" === typeof elem[2][1] ||
                                    $guard(true, {
                                      path:
                                        _path +
                                        "[4][1][" +
                                        _index1 +
                                        "][2][" +
                                        _index2 +
                                        "][2][1]",
                                      expected: "string",
                                      value: elem[2][1],
                                    }))) ||
                                  $guard(true, {
                                    path:
                                      _path +
                                      "[4][1][" +
                                      _index1 +
                                      "][2][" +
                                      _index2 +
                                      "][2]",
                                    expected: "[boolean, string]",
                                    value: elem[2],
                                  }))) ||
                              $guard(true, {
                                path:
                                  _path +
                                  "[4][1][" +
                                  _index1 +
                                  "][2][" +
                                  _index2 +
                                  "]",
                                expected: "[number, number, [boolean, string]]",
                                value: elem,
                              }),
                          )) ||
                          $guard(true, {
                            path: _path + "[4][1][" + _index1 + "][2]",
                            expected:
                              "Array<[number, number, [boolean, string]]>",
                            value: elem[2],
                          }))) ||
                      $guard(true, {
                        path: _path + "[4][1][" + _index1 + "]",
                        expected:
                          "[string, boolean, [number, number, [boolean, string]][]]",
                        value: elem,
                      }),
                  )) ||
                  $guard(true, {
                    path: _path + "[4][1]",
                    expected:
                      "Array<[string, boolean, [number, number, [boolean, string]][]]>",
                    value: input[4][1],
                  }))) ||
                $guard(true, {
                  path: _path + "[4]",
                  expected:
                    "[number, [string, boolean, [number, number, [boolean, string]][]][]]",
                  value: input[4],
                }))) ||
            $guard(true, {
              path: _path + "",
              expected: "TupleHierarchical",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    };
    input = JSON.parse(input);
    return assert(input) as any;
  })(input),
);

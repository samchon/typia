import typia from "typia";
import { _test_functional_assertEqualsReturn } from "../../../internal/_test_functional_assertEqualsReturn";
import { TupleHierarchical } from "../../../structures/TupleHierarchical";
import { TypeGuardError } from "typia";
export const test_functional_assertEqualsReturn_TupleHierarchical =
  _test_functional_assertEqualsReturn(TypeGuardError)("TupleHierarchical")(
    TupleHierarchical,
  )(
    (p: (input: TupleHierarchical) => TupleHierarchical) =>
      (input: TupleHierarchical): TupleHierarchical => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertEqualsReturn as any).errorFactory;
        return ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.return")
                : undefined,
            }),
        ): TupleHierarchical => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is TupleHierarchical => {
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
                (elem: any, _index1: number) =>
                  Array.isArray(elem) &&
                  elem.length === 3 &&
                  "string" === typeof elem[0] &&
                  "boolean" === typeof elem[1] &&
                  Array.isArray(elem[2]) &&
                  elem[2].every(
                    (elem: any, _index2: number) =>
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
              const $guard = (typia.functional.assertEqualsReturn as any).guard;
              return (
                ((Array.isArray(input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "TupleHierarchical",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  (input.length === 5 ||
                    $guard(
                      true,
                      {
                        path: _path + "",
                        expected:
                          "[boolean, null, number, [boolean, null, [number, [boolean, string]]], [number, [string, boolean, [number, number, [boolean, string]][]][]]]",
                        value: input,
                      },
                      errorFactory,
                    )) &&
                  ("boolean" === typeof input[0] ||
                    $guard(
                      true,
                      {
                        path: _path + "[0]",
                        expected: "boolean",
                        value: input[0],
                      },
                      errorFactory,
                    )) &&
                  (undefined !== input[1] ||
                    $guard(
                      true,
                      {
                        path: _path + "[1]",
                        expected: "null",
                        value: input[1],
                      },
                      errorFactory,
                    )) &&
                  (null === input[1] ||
                    $guard(
                      true,
                      {
                        path: _path + "[1]",
                        expected: "null",
                        value: input[1],
                      },
                      errorFactory,
                    )) &&
                  (("number" === typeof input[2] &&
                    Number.isFinite(input[2])) ||
                    $guard(
                      true,
                      {
                        path: _path + "[2]",
                        expected: "number",
                        value: input[2],
                      },
                      errorFactory,
                    )) &&
                  (((Array.isArray(input[3]) ||
                    $guard(
                      true,
                      {
                        path: _path + "[3]",
                        expected:
                          "[boolean, null, [number, [boolean, string]]]",
                        value: input[3],
                      },
                      errorFactory,
                    )) &&
                    (input[3].length === 3 ||
                      $guard(
                        true,
                        {
                          path: _path + "[3]",
                          expected:
                            "[boolean, null, [number, [boolean, string]]]",
                          value: input[3],
                        },
                        errorFactory,
                      )) &&
                    ("boolean" === typeof input[3][0] ||
                      $guard(
                        true,
                        {
                          path: _path + "[3][0]",
                          expected: "boolean",
                          value: input[3][0],
                        },
                        errorFactory,
                      )) &&
                    (undefined !== input[3][1] ||
                      $guard(
                        true,
                        {
                          path: _path + "[3][1]",
                          expected: "null",
                          value: input[3][1],
                        },
                        errorFactory,
                      )) &&
                    (null === input[3][1] ||
                      $guard(
                        true,
                        {
                          path: _path + "[3][1]",
                          expected: "null",
                          value: input[3][1],
                        },
                        errorFactory,
                      )) &&
                    (((Array.isArray(input[3][2]) ||
                      $guard(
                        true,
                        {
                          path: _path + "[3][2]",
                          expected: "[number, [boolean, string]]",
                          value: input[3][2],
                        },
                        errorFactory,
                      )) &&
                      (input[3][2].length === 2 ||
                        $guard(
                          true,
                          {
                            path: _path + "[3][2]",
                            expected: "[number, [boolean, string]]",
                            value: input[3][2],
                          },
                          errorFactory,
                        )) &&
                      (("number" === typeof input[3][2][0] &&
                        Number.isFinite(input[3][2][0])) ||
                        $guard(
                          true,
                          {
                            path: _path + "[3][2][0]",
                            expected: "number",
                            value: input[3][2][0],
                          },
                          errorFactory,
                        )) &&
                      (((Array.isArray(input[3][2][1]) ||
                        $guard(
                          true,
                          {
                            path: _path + "[3][2][1]",
                            expected: "[boolean, string]",
                            value: input[3][2][1],
                          },
                          errorFactory,
                        )) &&
                        (input[3][2][1].length === 2 ||
                          $guard(
                            true,
                            {
                              path: _path + "[3][2][1]",
                              expected: "[boolean, string]",
                              value: input[3][2][1],
                            },
                            errorFactory,
                          )) &&
                        ("boolean" === typeof input[3][2][1][0] ||
                          $guard(
                            true,
                            {
                              path: _path + "[3][2][1][0]",
                              expected: "boolean",
                              value: input[3][2][1][0],
                            },
                            errorFactory,
                          )) &&
                        ("string" === typeof input[3][2][1][1] ||
                          $guard(
                            true,
                            {
                              path: _path + "[3][2][1][1]",
                              expected: "string",
                              value: input[3][2][1][1],
                            },
                            errorFactory,
                          ))) ||
                        $guard(
                          true,
                          {
                            path: _path + "[3][2][1]",
                            expected: "[boolean, string]",
                            value: input[3][2][1],
                          },
                          errorFactory,
                        ))) ||
                      $guard(
                        true,
                        {
                          path: _path + "[3][2]",
                          expected: "[number, [boolean, string]]",
                          value: input[3][2],
                        },
                        errorFactory,
                      ))) ||
                    $guard(
                      true,
                      {
                        path: _path + "[3]",
                        expected:
                          "[boolean, null, [number, [boolean, string]]]",
                        value: input[3],
                      },
                      errorFactory,
                    )) &&
                  (((Array.isArray(input[4]) ||
                    $guard(
                      true,
                      {
                        path: _path + "[4]",
                        expected:
                          "[number, [string, boolean, [number, number, [boolean, string]][]][]]",
                        value: input[4],
                      },
                      errorFactory,
                    )) &&
                    (input[4].length === 2 ||
                      $guard(
                        true,
                        {
                          path: _path + "[4]",
                          expected:
                            "[number, Array<[string, boolean, [number, number, [boolean, string]][]]>]",
                          value: input[4],
                        },
                        errorFactory,
                      )) &&
                    (("number" === typeof input[4][0] &&
                      Number.isFinite(input[4][0])) ||
                      $guard(
                        true,
                        {
                          path: _path + "[4][0]",
                          expected: "number",
                          value: input[4][0],
                        },
                        errorFactory,
                      )) &&
                    (((Array.isArray(input[4][1]) ||
                      $guard(
                        true,
                        {
                          path: _path + "[4][1]",
                          expected:
                            "Array<[string, boolean, [number, number, [boolean, string]][]]>",
                          value: input[4][1],
                        },
                        errorFactory,
                      )) &&
                      input[4][1].every(
                        (elem: any, _index1: number) =>
                          ((Array.isArray(elem) ||
                            $guard(
                              true,
                              {
                                path: _path + "[4][1][" + _index1 + "]",
                                expected:
                                  "[string, boolean, [number, number, [boolean, string]][]]",
                                value: elem,
                              },
                              errorFactory,
                            )) &&
                            (elem.length === 3 ||
                              $guard(
                                true,
                                {
                                  path: _path + "[4][1][" + _index1 + "]",
                                  expected:
                                    "[string, boolean, Array<[number, number, [boolean, string]]>]",
                                  value: elem,
                                },
                                errorFactory,
                              )) &&
                            ("string" === typeof elem[0] ||
                              $guard(
                                true,
                                {
                                  path: _path + "[4][1][" + _index1 + "][0]",
                                  expected: "string",
                                  value: elem[0],
                                },
                                errorFactory,
                              )) &&
                            ("boolean" === typeof elem[1] ||
                              $guard(
                                true,
                                {
                                  path: _path + "[4][1][" + _index1 + "][1]",
                                  expected: "boolean",
                                  value: elem[1],
                                },
                                errorFactory,
                              )) &&
                            (((Array.isArray(elem[2]) ||
                              $guard(
                                true,
                                {
                                  path: _path + "[4][1][" + _index1 + "][2]",
                                  expected:
                                    "Array<[number, number, [boolean, string]]>",
                                  value: elem[2],
                                },
                                errorFactory,
                              )) &&
                              elem[2].every(
                                (elem: any, _index2: number) =>
                                  ((Array.isArray(elem) ||
                                    $guard(
                                      true,
                                      {
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
                                      },
                                      errorFactory,
                                    )) &&
                                    (elem.length === 3 ||
                                      $guard(
                                        true,
                                        {
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
                                        },
                                        errorFactory,
                                      )) &&
                                    (("number" === typeof elem[0] &&
                                      Number.isFinite(elem[0])) ||
                                      $guard(
                                        true,
                                        {
                                          path:
                                            _path +
                                            "[4][1][" +
                                            _index1 +
                                            "][2][" +
                                            _index2 +
                                            "][0]",
                                          expected: "number",
                                          value: elem[0],
                                        },
                                        errorFactory,
                                      )) &&
                                    (("number" === typeof elem[1] &&
                                      Number.isFinite(elem[1])) ||
                                      $guard(
                                        true,
                                        {
                                          path:
                                            _path +
                                            "[4][1][" +
                                            _index1 +
                                            "][2][" +
                                            _index2 +
                                            "][1]",
                                          expected: "number",
                                          value: elem[1],
                                        },
                                        errorFactory,
                                      )) &&
                                    (((Array.isArray(elem[2]) ||
                                      $guard(
                                        true,
                                        {
                                          path:
                                            _path +
                                            "[4][1][" +
                                            _index1 +
                                            "][2][" +
                                            _index2 +
                                            "][2]",
                                          expected: "[boolean, string]",
                                          value: elem[2],
                                        },
                                        errorFactory,
                                      )) &&
                                      (elem[2].length === 2 ||
                                        $guard(
                                          true,
                                          {
                                            path:
                                              _path +
                                              "[4][1][" +
                                              _index1 +
                                              "][2][" +
                                              _index2 +
                                              "][2]",
                                            expected: "[boolean, string]",
                                            value: elem[2],
                                          },
                                          errorFactory,
                                        )) &&
                                      ("boolean" === typeof elem[2][0] ||
                                        $guard(
                                          true,
                                          {
                                            path:
                                              _path +
                                              "[4][1][" +
                                              _index1 +
                                              "][2][" +
                                              _index2 +
                                              "][2][0]",
                                            expected: "boolean",
                                            value: elem[2][0],
                                          },
                                          errorFactory,
                                        )) &&
                                      ("string" === typeof elem[2][1] ||
                                        $guard(
                                          true,
                                          {
                                            path:
                                              _path +
                                              "[4][1][" +
                                              _index1 +
                                              "][2][" +
                                              _index2 +
                                              "][2][1]",
                                            expected: "string",
                                            value: elem[2][1],
                                          },
                                          errorFactory,
                                        ))) ||
                                      $guard(
                                        true,
                                        {
                                          path:
                                            _path +
                                            "[4][1][" +
                                            _index1 +
                                            "][2][" +
                                            _index2 +
                                            "][2]",
                                          expected: "[boolean, string]",
                                          value: elem[2],
                                        },
                                        errorFactory,
                                      ))) ||
                                  $guard(
                                    true,
                                    {
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
                                    },
                                    errorFactory,
                                  ),
                              )) ||
                              $guard(
                                true,
                                {
                                  path: _path + "[4][1][" + _index1 + "][2]",
                                  expected:
                                    "Array<[number, number, [boolean, string]]>",
                                  value: elem[2],
                                },
                                errorFactory,
                              ))) ||
                          $guard(
                            true,
                            {
                              path: _path + "[4][1][" + _index1 + "]",
                              expected:
                                "[string, boolean, [number, number, [boolean, string]][]]",
                              value: elem,
                            },
                            errorFactory,
                          ),
                      )) ||
                      $guard(
                        true,
                        {
                          path: _path + "[4][1]",
                          expected:
                            "Array<[string, boolean, [number, number, [boolean, string]][]]>",
                          value: input[4][1],
                        },
                        errorFactory,
                      ))) ||
                    $guard(
                      true,
                      {
                        path: _path + "[4]",
                        expected:
                          "[number, [string, boolean, [number, number, [boolean, string]][]][]]",
                        value: input[4],
                      },
                      errorFactory,
                    ))) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "TupleHierarchical",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(p(input));
      },
  );

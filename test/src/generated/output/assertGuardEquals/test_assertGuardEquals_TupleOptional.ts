import typia from "typia";

import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { TupleOptional } from "../../../structures/TupleOptional";

export const test_assertGuardEquals_TupleOptional = _test_assertGuardEquals(
  "TupleOptional",
)<TupleOptional>(TupleOptional)((input) =>
  ((input: any): asserts input is TupleOptional => {
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is TupleOptional => {
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any, _index1: number) =>
            Array.isArray(elem) &&
            3 <= elem.length &&
            5 >= elem.length &&
            "number" === typeof elem[0] &&
            Number.isFinite(elem[0]) &&
            "boolean" === typeof elem[1] &&
            "string" === typeof elem[2] &&
            (null === elem[3] ||
              undefined === elem[3] ||
              ("number" === typeof elem[3] && Number.isFinite(elem[3]))) &&
            (null === elem[4] ||
              undefined === elem[4] ||
              "string" === typeof elem[4]),
        )
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is TupleOptional => {
        const $guard = require("typia/lib/functional/$guard").$guard(
          "typia.assertGuardEquals",
        );
        return (
          ((Array.isArray(input) ||
            $guard(true, {
              path: _path + "",
              expected: "TupleOptional",
              value: input,
            })) &&
            input.every(
              (elem: any, _index1: number) =>
                ((Array.isArray(elem) ||
                  $guard(true, {
                    path: _path + "[" + _index1 + "]",
                    expected:
                      "[number, boolean, string, (number | null | undefined)?, (string | null | undefined)?]",
                    value: elem,
                  })) &&
                  ((3 <= elem.length && 5 >= elem.length) ||
                    $guard(true, {
                      path: _path + "[" + _index1 + "]",
                      expected:
                        "[number, boolean, string, (null | number | undefined), (null | string | undefined)]",
                      value: elem,
                    })) &&
                  (("number" === typeof elem[0] && Number.isFinite(elem[0])) ||
                    $guard(true, {
                      path: _path + "[" + _index1 + "][0]",
                      expected: "number",
                      value: elem[0],
                    })) &&
                  ("boolean" === typeof elem[1] ||
                    $guard(true, {
                      path: _path + "[" + _index1 + "][1]",
                      expected: "boolean",
                      value: elem[1],
                    })) &&
                  ("string" === typeof elem[2] ||
                    $guard(true, {
                      path: _path + "[" + _index1 + "][2]",
                      expected: "string",
                      value: elem[2],
                    })) &&
                  (null === elem[3] ||
                    undefined === elem[3] ||
                    ("number" === typeof elem[3] && Number.isFinite(elem[3])) ||
                    $guard(true, {
                      path: _path + "[" + _index1 + "][3]",
                      expected: "(null | number | undefined)",
                      value: elem[3],
                    })) &&
                  (null === elem[4] ||
                    undefined === elem[4] ||
                    "string" === typeof elem[4] ||
                    $guard(true, {
                      path: _path + "[" + _index1 + "][4]",
                      expected: "(null | string | undefined)",
                      value: elem[4],
                    }))) ||
                $guard(true, {
                  path: _path + "[" + _index1 + "]",
                  expected:
                    "[number, boolean, string, (number | null | undefined)?, (string | null | undefined)?]",
                  value: elem,
                }),
            )) ||
          $guard(true, {
            path: _path + "",
            expected: "TupleOptional",
            value: input,
          })
        );
      })(input, "$input", true);
  })(input),
);

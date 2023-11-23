import typia from "typia";

import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_createAssertGuardEquals_ConstantEnumeration =
  _test_assertGuardEquals("ConstantEnumeration")<ConstantEnumeration>(
    ConstantEnumeration,
  )((input: any): asserts input is ConstantEnumeration => {
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is ConstantEnumeration => {
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any, _index1: number) =>
            0 === elem ||
            1 === elem ||
            2 === elem ||
            "Three" === elem ||
            "Four" === elem,
        )
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ConstantEnumeration => {
        const $guard = (typia.createAssertGuardEquals as any).guard;
        return (
          ((Array.isArray(input) ||
            $guard(true, {
              path: _path + "",
              expected: "ConstantEnumeration",
              value: input,
            })) &&
            input.every(
              (elem: any, _index1: number) =>
                0 === elem ||
                1 === elem ||
                2 === elem ||
                "Three" === elem ||
                "Four" === elem ||
                $guard(true, {
                  path: _path + "[" + _index1 + "]",
                  expected: '("Four" | "Three" | 0 | 1 | 2)',
                  value: elem,
                }),
            )) ||
          $guard(true, {
            path: _path + "",
            expected: "ConstantEnumeration",
            value: input,
          })
        );
      })(input, "$input", true);
  });

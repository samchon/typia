import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_assertEqualsCustom_ConstantConstEnumeration =
  _test_assertEquals(CustomGuardError)(
    "ConstantConstEnumeration",
  )<ConstantConstEnumeration>(ConstantConstEnumeration)((input) =>
    ((
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): ConstantConstEnumeration => {
      const __is = (
        input: any,
        _exceptionable: boolean = true,
      ): input is ConstantConstEnumeration => {
        return (
          Array.isArray(input) &&
          input.every(
            (elem: any, _index1: number) =>
              0 === elem ||
              1 === elem ||
              2 === elem ||
              "Four" === elem ||
              "Three" === elem,
          )
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is ConstantConstEnumeration => {
          const $guard = (typia.assertEquals as any).guard;
          return (
            ((Array.isArray(input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ConstantConstEnumeration",
                  value: input,
                },
                errorFactory,
              )) &&
              input.every(
                (elem: any, _index1: number) =>
                  0 === elem ||
                  1 === elem ||
                  2 === elem ||
                  "Four" === elem ||
                  "Three" === elem ||
                  $guard(
                    true,
                    {
                      path: _path + "[" + _index1 + "]",
                      expected: '("Four" | "Three" | 0 | 1 | 2)',
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ConstantConstEnumeration",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
      return input;
    })(input, (p) => new CustomGuardError(p)),
  );

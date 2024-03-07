import typia from "typia";
import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_assertGuardCustom_ConstantEnumeration = _test_assertGuard(
  CustomGuardError,
)("ConstantEnumeration")<ConstantEnumeration>(ConstantEnumeration)((input) =>
  ((
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): asserts input is ConstantEnumeration => {
    const __is = (input: any): input is ConstantEnumeration => {
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any) =>
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
        const $guard = (typia.assertGuard as any).guard;
        return (
          ((Array.isArray(input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ConstantEnumeration",
                value: input,
              },
              errorFactory,
            )) &&
            input.every(
              (elem: any, _index1: number) =>
                0 === elem ||
                1 === elem ||
                2 === elem ||
                "Three" === elem ||
                "Four" === elem ||
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
              expected: "ConstantEnumeration",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
  })(input, (p) => new CustomGuardError(p)),
);

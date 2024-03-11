import typia from "typia";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_createAssertEqualsCustom_ConstantEnumeration =
  _test_assertEquals(CustomGuardError)(
    "ConstantEnumeration",
  )<ConstantEnumeration>(ConstantEnumeration)(
    (
      input: any,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): ConstantEnumeration => {
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
        ): input is ConstantEnumeration => {
          const $guard = (typia.createAssertEquals as any).guard;
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
                expected: "ConstantEnumeration",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
      return input;
    },
  );

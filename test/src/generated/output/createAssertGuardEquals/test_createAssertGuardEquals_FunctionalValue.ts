import typia from "typia";
import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { FunctionalValue } from "../../../structures/FunctionalValue";
import { TypeGuardError } from "typia";
export const test_createAssertGuardEquals_FunctionalValue =
  _test_assertGuardEquals(TypeGuardError)("FunctionalValue")<FunctionalValue>(
    FunctionalValue,
  )(
    (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): asserts input is FunctionalValue => {
      const __is = (
        input: any,
        _exceptionable: boolean = true,
      ): input is FunctionalValue => {
        return "function" === typeof input;
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is FunctionalValue => {
          const $guard = (typia.createAssertGuardEquals as any).guard;
          return (
            "function" === typeof input ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "unknown",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
    },
  );

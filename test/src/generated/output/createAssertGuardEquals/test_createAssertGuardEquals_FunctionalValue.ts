import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { FunctionalValue } from "../../../structures/FunctionalValue";

export const test_createAssertGuardEquals_FunctionalValue =
  _test_assertGuardEquals(TypeGuardError)("FunctionalValue")<FunctionalValue>(
    FunctionalValue,
  )(
    (
      input: any,
      errorFactory?: import("typia").TypeGuardError.IProps,
    ): asserts input is FunctionalValue => {
      const $guard = (typia.createAssertGuardEquals as any).guard(errorFactory);
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
          return (
            "function" === typeof input ||
            $guard(true, {
              path: _path + "",
              expected: "unknown",
              value: input,
            })
          );
        })(input, "$input", true);
    },
  );

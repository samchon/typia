import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { FunctionalValue } from "../../../structures/FunctionalValue";

export const test_createAssertGuardEqualsCustom_FunctionalValue =
  _test_assertGuardEquals(CustomGuardError)("FunctionalValue")<FunctionalValue>(
    FunctionalValue,
  )(
    (
      input: any,
      errorFactory: import("typia").TypeGuardError.IProps = (p) =>
        new CustomGuardError(p),
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

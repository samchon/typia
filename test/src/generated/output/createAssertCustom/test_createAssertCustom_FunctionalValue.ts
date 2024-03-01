import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_assert } from "../../../internal/_test_assert";
import { FunctionalValue } from "../../../structures/FunctionalValue";

export const test_createAssertCustom_FunctionalValue = _test_assert(
  CustomGuardError,
)("FunctionalValue")<FunctionalValue>(FunctionalValue)(
  (
    input: any,
    errorFactory: import("typia").TypeGuardError.IProps = (p) =>
      new CustomGuardError(p),
  ): FunctionalValue => {
    const $guard = (typia.createAssert as any).guard(errorFactory);
    const __is = (input: any): input is FunctionalValue => {
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
    return input;
  },
);

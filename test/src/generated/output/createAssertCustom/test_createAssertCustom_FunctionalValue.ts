import typia from "typia";
import { _test_assert } from "../../../internal/_test_assert";
import { FunctionalValue } from "../../../structures/FunctionalValue";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_createAssertCustom_FunctionalValue = _test_assert(
  CustomGuardError,
)("FunctionalValue")<FunctionalValue>(FunctionalValue)(
  (
    input: any,
    errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
      new CustomGuardError(p),
  ): FunctionalValue => {
    const __is = (input: any): input is FunctionalValue => {
      return "function" === typeof input;
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is FunctionalValue => {
        const $guard = (typia.createAssert as any).guard;
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
    return input;
  },
);

import typia from "typia";
import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { FunctionalValue } from "../../../structures/FunctionalValue";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_createAssertGuardCustom_FunctionalValue = _test_assertGuard(
  CustomGuardError,
)("FunctionalValue")<FunctionalValue>(FunctionalValue)(
  (
    input: any,
    errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
      new CustomGuardError(p),
  ): asserts input is FunctionalValue => {
    const __is = (input: any): input is FunctionalValue => {
      return "function" === typeof input;
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is FunctionalValue => {
        const $guard = (typia.createAssertGuard as any).guard;
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

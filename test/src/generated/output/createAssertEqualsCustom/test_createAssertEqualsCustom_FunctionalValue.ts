import typia from "typia";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { FunctionalValue } from "../../../structures/FunctionalValue";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_createAssertEqualsCustom_FunctionalValue = _test_assertEquals(
  CustomGuardError,
)("FunctionalValue")<FunctionalValue>(FunctionalValue)(
  (
    input: any,
    errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
      new CustomGuardError(p),
  ): FunctionalValue => {
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
        const $guard = (typia.createAssertEquals as any).guard;
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

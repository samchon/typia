import typia from "typia";
import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { FunctionalArray } from "../../../structures/FunctionalArray";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_createAssertGuardCustom_FunctionalArray = _test_assertGuard(
  CustomGuardError,
)("FunctionalArray")<FunctionalArray>(FunctionalArray)(
  (
    input: any,
    errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
      new CustomGuardError(p),
  ): asserts input is FunctionalArray => {
    const __is = (input: any): input is FunctionalArray => {
      return (
        Array.isArray(input) &&
        input.every((elem: any) => "function" === typeof elem)
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is FunctionalArray => {
        const $guard = (typia.createAssertGuard as any).guard;
        return (
          ((Array.isArray(input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "FunctionalArray",
                value: input,
              },
              errorFactory,
            )) &&
            input.every(
              (elem: any, _index1: number) =>
                "function" === typeof elem ||
                $guard(
                  true,
                  {
                    path: _path + "[" + _index1 + "]",
                    expected: "unknown",
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "FunctionalArray",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
  },
);

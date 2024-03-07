import typia from "typia";
import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { FunctionalArray } from "../../../structures/FunctionalArray";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_createAssertGuardEqualsCustom_FunctionalArray =
  _test_assertGuardEquals(CustomGuardError)("FunctionalArray")<FunctionalArray>(
    FunctionalArray,
  )(
    (
      input: any,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): asserts input is FunctionalArray => {
      const __is = (
        input: any,
        _exceptionable: boolean = true,
      ): input is FunctionalArray => {
        return (
          Array.isArray(input) &&
          input.every(
            (elem: any, _index1: number) => "function" === typeof elem,
          )
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is FunctionalArray => {
          const $guard = (typia.createAssertGuardEquals as any).guard;
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

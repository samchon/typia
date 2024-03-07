import typia from "typia";
import { _test_assert } from "../../../internal/_test_assert";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";
import { TypeGuardError } from "typia";
export const test_assert_ToJsonDouble = _test_assert(TypeGuardError)(
  "ToJsonDouble",
)<ToJsonDouble>(ToJsonDouble)((input) =>
  ((
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ToJsonDouble => {
    const __is = (input: any): input is ToJsonDouble => {
      return "object" === typeof input && null !== input && true;
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ToJsonDouble => {
        const $guard = (typia.assert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean => true;
        return (
          ((("object" === typeof input &&
            null !== input &&
            false === Array.isArray(input)) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ToJsonDouble.Parent",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "ToJsonDouble.Parent",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  })(input),
);

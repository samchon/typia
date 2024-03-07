import typia from "typia";
import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { ClassNonPublic } from "../../../structures/ClassNonPublic";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_assertGuardCustom_ClassNonPublic = _test_assertGuard(
  CustomGuardError,
)("ClassNonPublic")<ClassNonPublic>(ClassNonPublic)((input) =>
  ((
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): asserts input is ClassNonPublic => {
    const __is = (input: any): input is ClassNonPublic => {
      return (
        "object" === typeof input &&
        null !== input &&
        "string" === typeof (input as any).implicit &&
        "string" === typeof (input as any).shown
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ClassNonPublic => {
        const $guard = (typia.assertGuard as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("string" === typeof input.implicit ||
            $guard(
              _exceptionable,
              {
                path: _path + ".implicit",
                expected: "string",
                value: input.implicit,
              },
              errorFactory,
            )) &&
          ("string" === typeof input.shown ||
            $guard(
              _exceptionable,
              {
                path: _path + ".shown",
                expected: "string",
                value: input.shown,
              },
              errorFactory,
            ));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ClassNonPublic.Accessor",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "ClassNonPublic.Accessor",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
  })(input, (p) => new CustomGuardError(p)),
);

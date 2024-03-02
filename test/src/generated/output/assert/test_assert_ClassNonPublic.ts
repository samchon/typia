import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../../internal/_test_assert";
import { ClassNonPublic } from "../../../structures/ClassNonPublic";

export const test_assert_ClassNonPublic = _test_assert(TypeGuardError)(
  "ClassNonPublic",
)<ClassNonPublic>(ClassNonPublic)((input) =>
  ((
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ClassNonPublic => {
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
        const $guard = (typia.assert as any).guard;
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
    return input;
  })(input),
);

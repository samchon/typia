import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_assertGuard_ToJsonNull = _test_assertGuard(TypeGuardError)(
  "ToJsonNull",
)<ToJsonNull>(ToJsonNull)((input) =>
  ((
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): asserts input is ToJsonNull => {
    const __is = (input: any): input is ToJsonNull => {
      const $io0 = (input: any): boolean => "function" === typeof input.toJSON;
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ToJsonNull => {
        const $guard = (typia.assertGuard as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          "function" === typeof input.toJSON ||
          $guard(
            _exceptionable,
            {
              path: _path + ".toJSON",
              expected: "unknown",
              value: input.toJSON,
            },
            errorFactory,
          );
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ToJsonNull",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "ToJsonNull",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
  })(input),
);

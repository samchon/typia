import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";

export const test_assertEqualsCustom_AtomicIntersection = _test_assertEquals(
  CustomGuardError,
)("AtomicIntersection")<AtomicIntersection>(AtomicIntersection)((input) =>
  ((
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): AtomicIntersection => {
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is AtomicIntersection => {
      return (
        Array.isArray(input) &&
        input.length === 3 &&
        "boolean" === typeof input[0] &&
        "number" === typeof input[1] &&
        Number.isFinite(input[1]) &&
        "string" === typeof input[2]
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is AtomicIntersection => {
        const $guard = (typia.assertEquals as any).guard;
        return (
          ((Array.isArray(input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "AtomicIntersection",
                value: input,
              },
              errorFactory,
            )) &&
            (input.length === 3 ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "[boolean, number, string]",
                  value: input,
                },
                errorFactory,
              )) &&
            ("boolean" === typeof input[0] ||
              $guard(
                true,
                {
                  path: _path + "[0]",
                  expected: "boolean",
                  value: input[0],
                },
                errorFactory,
              )) &&
            (("number" === typeof input[1] && Number.isFinite(input[1])) ||
              $guard(
                true,
                {
                  path: _path + "[1]",
                  expected: "number",
                  value: input[1],
                },
                errorFactory,
              )) &&
            ("string" === typeof input[2] ||
              $guard(
                true,
                {
                  path: _path + "[2]",
                  expected: "string",
                  value: input[2],
                },
                errorFactory,
              ))) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "AtomicIntersection",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  })(input, (p) => new CustomGuardError(p)),
);

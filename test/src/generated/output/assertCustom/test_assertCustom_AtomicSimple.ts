import typia from "typia";
import { _test_assert } from "../../../internal/_test_assert";
import { AtomicSimple } from "../../../structures/AtomicSimple";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_assertCustom_AtomicSimple = _test_assert(CustomGuardError)(
  "AtomicSimple",
)<AtomicSimple>(AtomicSimple)((input) =>
  ((
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): AtomicSimple => {
    const __is = (input: any): input is AtomicSimple => {
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
      ): input is AtomicSimple => {
        const $guard = (typia.assert as any).guard;
        return (
          ((Array.isArray(input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "AtomicSimple",
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
              expected: "AtomicSimple",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  })(input, (p) => new CustomGuardError(p)),
);

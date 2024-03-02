import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";

export const test_assertGuardCustom_ToJsonAtomicSimple = _test_assertGuard(
  CustomGuardError,
)("ToJsonAtomicSimple")<ToJsonAtomicSimple>(ToJsonAtomicSimple)((input) =>
  ((
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): asserts input is ToJsonAtomicSimple => {
    const __is = (input: any): input is ToJsonAtomicSimple => {
      const $io0 = (input: any): boolean => "function" === typeof input.toJSON;
      const $io1 = (input: any): boolean => "function" === typeof input.toJSON;
      const $io2 = (input: any): boolean => "function" === typeof input.toJSON;
      return (
        Array.isArray(input) &&
        input.length === 3 &&
        "object" === typeof input[0] &&
        null !== input[0] &&
        $io0(input[0]) &&
        "object" === typeof input[1] &&
        null !== input[1] &&
        $io1(input[1]) &&
        "object" === typeof input[2] &&
        null !== input[2] &&
        $io2(input[2])
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ToJsonAtomicSimple => {
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
        const $ao1 = (
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
        const $ao2 = (
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
          ((Array.isArray(input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ToJsonAtomicSimple",
                value: input,
              },
              errorFactory,
            )) &&
            (input.length === 3 ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected:
                    "[ToJsonAtomicSimple.IToJson<boolean>, ToJsonAtomicSimple.IToJson<number>, ToJsonAtomicSimple.IToJson<string>]",
                  value: input,
                },
                errorFactory,
              )) &&
            (((("object" === typeof input[0] && null !== input[0]) ||
              $guard(
                true,
                {
                  path: _path + "[0]",
                  expected: "ToJsonAtomicSimple.IToJson<boolean>",
                  value: input[0],
                },
                errorFactory,
              )) &&
              $ao0(input[0], _path + "[0]", true)) ||
              $guard(
                true,
                {
                  path: _path + "[0]",
                  expected: "ToJsonAtomicSimple.IToJson<boolean>",
                  value: input[0],
                },
                errorFactory,
              )) &&
            (((("object" === typeof input[1] && null !== input[1]) ||
              $guard(
                true,
                {
                  path: _path + "[1]",
                  expected: "ToJsonAtomicSimple.IToJson<number>",
                  value: input[1],
                },
                errorFactory,
              )) &&
              $ao1(input[1], _path + "[1]", true)) ||
              $guard(
                true,
                {
                  path: _path + "[1]",
                  expected: "ToJsonAtomicSimple.IToJson<number>",
                  value: input[1],
                },
                errorFactory,
              )) &&
            (((("object" === typeof input[2] && null !== input[2]) ||
              $guard(
                true,
                {
                  path: _path + "[2]",
                  expected: "ToJsonAtomicSimple.IToJson<string>",
                  value: input[2],
                },
                errorFactory,
              )) &&
              $ao2(input[2], _path + "[2]", true)) ||
              $guard(
                true,
                {
                  path: _path + "[2]",
                  expected: "ToJsonAtomicSimple.IToJson<string>",
                  value: input[2],
                },
                errorFactory,
              ))) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "ToJsonAtomicSimple",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
  })(input, (p) => new CustomGuardError(p)),
);

import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { ArrayRepeatedOptional } from "../../../structures/ArrayRepeatedOptional";

export const test_createAssertGuard_ArrayRepeatedOptional = _test_assertGuard(
  TypeGuardError,
)("ArrayRepeatedOptional")<ArrayRepeatedOptional>(ArrayRepeatedOptional)(
  (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): asserts input is ArrayRepeatedOptional => {
    const __is = (input: any): input is ArrayRepeatedOptional => {
      const $ia0 = (input: any): any =>
        input.every(
          (elem: any) =>
            null !== elem &&
            (undefined === elem ||
              "string" === typeof elem ||
              ("number" === typeof elem && Number.isFinite(elem)) ||
              (Array.isArray(elem) && ($ia0(elem) || false))),
        );
      return (
        null !== input &&
        (undefined === input ||
          "string" === typeof input ||
          ("number" === typeof input && Number.isFinite(input)) ||
          (Array.isArray(input) && ($ia0(input) || false)))
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ArrayRepeatedOptional => {
        const $guard = (typia.createAssertGuard as any).guard;
        const $aa0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): any =>
          input.every(
            (elem: any, _index1: number) =>
              (null !== elem ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + "[" + _index1 + "]",
                    expected:
                      "(Array<ArrayRepeatedOptional> | number | string | undefined)",
                    value: elem,
                  },
                  errorFactory,
                )) &&
              (undefined === elem ||
                "string" === typeof elem ||
                ("number" === typeof elem && Number.isFinite(elem)) ||
                ((Array.isArray(elem) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + "[" + _index1 + "]",
                      expected:
                        "(Array<ArrayRepeatedOptional> | number | string | undefined)",
                      value: elem,
                    },
                    errorFactory,
                  )) &&
                  ($aa0(
                    elem,
                    _path + "[" + _index1 + "]",
                    true && _exceptionable,
                  ) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + "[" + _index1 + "]",
                        expected: "Array<ArrayRepeatedOptional>",
                        value: elem,
                      },
                      errorFactory,
                    ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + "[" + _index1 + "]",
                    expected:
                      "(Array<ArrayRepeatedOptional> | number | string | undefined)",
                    value: elem,
                  },
                  errorFactory,
                )),
          );
        return (
          (null !== input ||
            $guard(
              true,
              {
                path: _path + "",
                expected:
                  "(Array<ArrayRepeatedOptional> | number | string | undefined)",
                value: input,
              },
              errorFactory,
            )) &&
          (undefined === input ||
            "string" === typeof input ||
            ("number" === typeof input && Number.isFinite(input)) ||
            ((Array.isArray(input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected:
                    "(Array<ArrayRepeatedOptional> | number | string | undefined)",
                  value: input,
                },
                errorFactory,
              )) &&
              ($aa0(input, _path + "", true && _exceptionable) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + "",
                    expected: "Array<ArrayRepeatedOptional>",
                    value: input,
                  },
                  errorFactory,
                ))) ||
            $guard(
              true,
              {
                path: _path + "",
                expected:
                  "(Array<ArrayRepeatedOptional> | number | string | undefined)",
                value: input,
              },
              errorFactory,
            ))
        );
      })(input, "$input", true);
  },
);

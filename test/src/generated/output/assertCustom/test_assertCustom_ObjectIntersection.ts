import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_assert } from "../../../internal/_test_assert";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_assertCustom_ObjectIntersection = _test_assert(
  CustomGuardError,
)("ObjectIntersection")<ObjectIntersection>(ObjectIntersection)((input) =>
  ((
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ObjectIntersection => {
    const __is = (input: any): input is ObjectIntersection => {
      return (
        "object" === typeof input &&
        null !== input &&
        "string" === typeof (input as any).email &&
        "string" === typeof (input as any).name &&
        "boolean" === typeof (input as any).vulnerable
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectIntersection => {
        const $guard = (typia.assert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("string" === typeof input.email ||
            $guard(
              _exceptionable,
              {
                path: _path + ".email",
                expected: "string",
                value: input.email,
              },
              errorFactory,
            )) &&
          ("string" === typeof input.name ||
            $guard(
              _exceptionable,
              {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              },
              errorFactory,
            )) &&
          ("boolean" === typeof input.vulnerable ||
            $guard(
              _exceptionable,
              {
                path: _path + ".vulnerable",
                expected: "boolean",
                value: input.vulnerable,
              },
              errorFactory,
            ));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ObjectIntersection",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "ObjectIntersection",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  })(input, (p) => new CustomGuardError(p)),
);

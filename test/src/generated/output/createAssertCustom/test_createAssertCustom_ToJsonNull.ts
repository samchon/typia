import typia from "typia";
import { _test_assert } from "../../../internal/_test_assert";
import { ToJsonNull } from "../../../structures/ToJsonNull";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_createAssertCustom_ToJsonNull = _test_assert(
  CustomGuardError,
)("ToJsonNull")<ToJsonNull>(ToJsonNull)(
  (
    input: any,
    errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
      new CustomGuardError(p),
  ): ToJsonNull => {
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
        const $guard = (typia.createAssert as any).guard;
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
    return input;
  },
);

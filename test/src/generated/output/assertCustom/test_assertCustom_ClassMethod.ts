import typia from "typia";
import { _test_assert } from "../../../internal/_test_assert";
import { ClassMethod } from "../../../structures/ClassMethod";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_assertCustom_ClassMethod = _test_assert(CustomGuardError)(
  "ClassMethod",
)<ClassMethod>(ClassMethod)((input) =>
  ((
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ClassMethod => {
    const __is = (input: any): input is ClassMethod => {
      return (
        "object" === typeof input &&
        null !== input &&
        "string" === typeof (input as any).name &&
        "number" === typeof (input as any).age &&
        Number.isFinite((input as any).age)
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ClassMethod => {
        const $guard = (typia.assert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
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
          (("number" === typeof input.age && Number.isFinite(input.age)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".age",
                expected: "number",
                value: input.age,
              },
              errorFactory,
            ));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ClassMethod.Animal",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "ClassMethod.Animal",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  })(input, (p) => new CustomGuardError(p)),
);

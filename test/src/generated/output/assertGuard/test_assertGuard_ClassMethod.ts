import typia from "typia";

import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_assertGuard_ClassMethod = _test_assertGuard(
  "ClassMethod",
)<ClassMethod>(ClassMethod)((input) =>
  ((input: any): asserts input is ClassMethod => {
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
        const $guard = (typia.assertGuard as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("string" === typeof input.name ||
            $guard(_exceptionable, {
              path: _path + ".name",
              expected: "string",
              value: input.name,
            })) &&
          (("number" === typeof input.age && Number.isFinite(input.age)) ||
            $guard(_exceptionable, {
              path: _path + ".age",
              expected: "number",
              value: input.age,
            }));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(true, {
              path: _path + "",
              expected: "ClassMethod.Animal",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "ClassMethod.Animal",
            value: input,
          })
        );
      })(input, "$input", true);
  })(input),
);

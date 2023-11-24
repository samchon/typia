import typia from "typia";

import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_misc_assertClone_ClassMethod = _test_misc_assertClone(
  "ClassMethod",
)<ClassMethod>(ClassMethod)((input) =>
  ((input: any): typia.Resolved<ClassMethod> => {
    const assert = (input: any): ClassMethod => {
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
          const $guard = (typia.misc.assertClone as any).guard;
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
      return input;
    };
    const clone = (input: ClassMethod): typia.Resolved<ClassMethod> => {
      const $co0 = (input: any): any => ({
        name: input.name as any,
        age: input.age as any,
      });
      return "object" === typeof input && null !== input
        ? $co0(input)
        : (input as any);
    };
    assert(input);
    const output = clone(input);
    return output;
  })(input),
);

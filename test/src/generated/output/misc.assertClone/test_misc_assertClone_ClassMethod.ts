import typia from "typia";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ClassMethod } from "../../../structures/ClassMethod";
import { TypeGuardError } from "typia";
export const test_misc_assertClone_ClassMethod = _test_misc_assertClone(
  TypeGuardError,
)("ClassMethod")<ClassMethod>(ClassMethod)((input) =>
  ((
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): import("typia").Resolved<ClassMethod> => {
    const assert = (
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
          const $guard = (typia.misc.assertClone as any).guard;
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
    };
    const clone = (
      input: ClassMethod,
    ): import("typia").Resolved<ClassMethod> => {
      const $co0 = (input: any): any => ({
        name: input.name as any,
        age: input.age as any,
      });
      return "object" === typeof input && null !== input
        ? $co0(input)
        : (input as any);
    };
    assert(input, errorFactory);
    const output = clone(input);
    return output;
  })(input),
);

import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_random_ClassMethod = _test_random("ClassMethod")<ClassMethod>(
  ClassMethod,
)({
  random: () =>
    ((
      generator?: Partial<typia.IRandomGenerator>,
    ): typia.Resolved<ClassMethod> => {
      const $generator = (typia.random as any).generator;
      const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
        name:
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
        age:
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
      });
      return $ro0();
    })((ClassMethod as any).RANDOM),
  assert: (input: any): ClassMethod => {
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
        const $guard = (typia.createAssert as any).guard;
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
  },
});

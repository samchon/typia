import typia from "typia";

import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_misc_createAssertPrune_ClassMethod = _test_misc_assertPrune(
  "ClassMethod",
)<ClassMethod>(ClassMethod)((input: any): ClassMethod => {
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
        const $guard = (typia.misc.createAssertPrune as any).guard;
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
  const prune = (input: ClassMethod): void => {
    const $po0 = (input: any): any => {
      for (const key of Object.keys(input)) {
        if ("name" === key || "age" === key) continue;
        delete input[key];
      }
    };
    if ("object" === typeof input && null !== input) $po0(input);
  };
  assert(input);
  prune(input);
  return input;
});

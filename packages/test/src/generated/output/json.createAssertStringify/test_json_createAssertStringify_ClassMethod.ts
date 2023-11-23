import typia from "typia";

import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_json_createAssertStringify_ClassMethod =
  _test_json_assertStringify("ClassMethod")<ClassMethod>(ClassMethod)(
    (input: any): string => {
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
            const $guard = (typia.json.createAssertStringify as any).guard;
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
      const stringify = (input: ClassMethod): string => {
        const $string = (typia.json.createAssertStringify as any).string;
        const $number = (typia.json.createAssertStringify as any).number;
        return `{"name":${$string((input as any).name)},"age":${$number(
          (input as any).age,
        )}}`;
      };
      return stringify(assert(input));
    },
  );

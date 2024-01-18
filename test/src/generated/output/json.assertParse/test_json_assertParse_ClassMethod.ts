import typia from "typia";

import { _test_json_assertParse } from "../../../internal/_test_json_assertParse";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_json_assertParse_ClassMethod = _test_json_assertParse(
  "ClassMethod",
)<ClassMethod>(ClassMethod)((input) =>
  ((input: string): typia.Primitive<ClassMethod> => {
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
          const $guard = require("typia/lib/functional/$guard").$guard(
            "typia.json.assertParse",
          );
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
    input = JSON.parse(input);
    return assert(input) as any;
  })(input),
);

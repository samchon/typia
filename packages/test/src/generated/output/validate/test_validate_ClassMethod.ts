import typia from "typia";

import { _test_validate } from "../../../internal/_test_validate";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_validate_ClassMethod = _test_validate(
  "ClassMethod",
)<ClassMethod>(ClassMethod)((input) =>
  ((input: any): typia.IValidation<ClassMethod> => {
    const errors = [] as any[];
    const __is = (input: any): input is ClassMethod => {
      return (
        "object" === typeof input &&
        null !== input &&
        "string" === typeof (input as any).name &&
        "number" === typeof (input as any).age &&
        Number.isFinite((input as any).age)
      );
    };
    if (false === __is(input)) {
      const $report = (typia.validate as any).report(errors);
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ClassMethod => {
        const $vo0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            "string" === typeof input.name ||
              $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              }),
            ("number" === typeof input.age && Number.isFinite(input.age)) ||
              $report(_exceptionable, {
                path: _path + ".age",
                expected: "number",
                value: input.age,
              }),
          ].every((flag: boolean) => flag);
        return (
          ((("object" === typeof input && null !== input) ||
            $report(true, {
              path: _path + "",
              expected: "ClassMethod.Animal",
              value: input,
            })) &&
            $vo0(input, _path + "", true)) ||
          $report(true, {
            path: _path + "",
            expected: "ClassMethod.Animal",
            value: input,
          })
        );
      })(input, "$input", true);
    }
    const success = 0 === errors.length;
    return {
      success,
      errors,
      data: success ? input : undefined,
    } as any;
  })(input),
);

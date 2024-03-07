import typia from "typia";
import { _test_validate } from "../../../internal/_test_validate";
import { FunctionalTuple } from "../../../structures/FunctionalTuple";
export const test_createValidate_FunctionalTuple = _test_validate(
  "FunctionalTuple",
)<FunctionalTuple>(FunctionalTuple)(
  (input: any): typia.IValidation<FunctionalTuple> => {
    const errors = [] as any[];
    const __is = (input: any): input is FunctionalTuple => {
      return (
        Array.isArray(input) &&
        input.length === 3 &&
        "function" === typeof input[0] &&
        "function" === typeof input[1] &&
        "function" === typeof input[2]
      );
    };
    if (false === __is(input)) {
      const $report = (typia.createValidate as any).report(errors);
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is FunctionalTuple => {
        return (
          ((Array.isArray(input) ||
            $report(true, {
              path: _path + "",
              expected: "FunctionalTuple",
              value: input,
            })) &&
            (input.length === 3 ||
              $report(true, {
                path: _path + "",
                expected: "[unknown, unknown, unknown]",
                value: input,
              })) &&
            [
              "function" === typeof input[0] ||
                $report(true, {
                  path: _path + "[0]",
                  expected: "unknown",
                  value: input[0],
                }),
              "function" === typeof input[1] ||
                $report(true, {
                  path: _path + "[1]",
                  expected: "unknown",
                  value: input[1],
                }),
              "function" === typeof input[2] ||
                $report(true, {
                  path: _path + "[2]",
                  expected: "unknown",
                  value: input[2],
                }),
            ].every((flag: boolean) => flag)) ||
          $report(true, {
            path: _path + "",
            expected: "FunctionalTuple",
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
  },
);

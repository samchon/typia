import typia from "typia";

import { _test_validate } from "../../../internal/_test_validate";
import { FunctionalArray } from "../../../structures/FunctionalArray";

export const test_createValidate_FunctionalArray = _test_validate(
  "FunctionalArray",
)<FunctionalArray>(FunctionalArray)(
  (input: any): typia.IValidation<FunctionalArray> => {
    const errors = [] as any[];
    const __is = (input: any): input is FunctionalArray => {
      return (
        Array.isArray(input) &&
        input.every((elem: any) => "function" === typeof elem)
      );
    };
    if (false === __is(input)) {
      const $report = (typia.createValidate as any).report(errors);
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is FunctionalArray => {
        return (
          ((Array.isArray(input) ||
            $report(true, {
              path: _path + "",
              expected: "FunctionalArray",
              value: input,
            })) &&
            input
              .map(
                (elem: any, _index1: number) =>
                  "function" === typeof elem ||
                  $report(true, {
                    path: _path + "[" + _index1 + "]",
                    expected: "unknown",
                    value: elem,
                  }),
              )
              .every((flag: boolean) => flag)) ||
          $report(true, {
            path: _path + "",
            expected: "FunctionalArray",
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

import typia from "typia";

import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { FunctionalValue } from "../../../structures/FunctionalValue";

export const test_createValidateEquals_FunctionalValue = _test_validateEquals(
  "FunctionalValue",
)<FunctionalValue>(FunctionalValue)(
  (input: any): typia.IValidation<FunctionalValue> => {
    const errors = [] as any[];
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is FunctionalValue => {
      return "function" === typeof input;
    };
    if (false === __is(input)) {
      const $report = (typia.createValidateEquals as any).report(errors);
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is FunctionalValue => {
        return (
          "function" === typeof input ||
          $report(true, {
            path: _path + "",
            expected: "unknown",
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

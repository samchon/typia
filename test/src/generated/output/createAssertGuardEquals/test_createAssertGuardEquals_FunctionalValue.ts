import typia from "typia";

import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { FunctionalValue } from "../../../structures/FunctionalValue";

export const test_createAssertGuardEquals_FunctionalValue =
  _test_assertGuardEquals("FunctionalValue")<FunctionalValue>(FunctionalValue)(
    (input: any): asserts input is FunctionalValue => {
      const __is = (
        input: any,
        _exceptionable: boolean = true,
      ): input is FunctionalValue => {
        return "function" === typeof input;
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is FunctionalValue => {
          // @ts-ignore;
          declare const require: (lib: string) => any;
          const $guard = require("typia/lib/functional/$guard").$guard(
            "typia.createAssertGuardEquals",
          );
          return (
            "function" === typeof input ||
            $guard(true, {
              path: _path + "",
              expected: "unknown",
              value: input,
            })
          );
        })(input, "$input", true);
    },
  );

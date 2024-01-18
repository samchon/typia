import typia from "typia";

import { _test_assert } from "../../../internal/_test_assert";
import { FunctionalTuple } from "../../../structures/FunctionalTuple";

export const test_createAssert_FunctionalTuple = _test_assert(
  "FunctionalTuple",
)<FunctionalTuple>(FunctionalTuple)((input: any): FunctionalTuple => {
  const __is = (input: any): input is FunctionalTuple => {
    return (
      Array.isArray(input) &&
      input.length === 3 &&
      "function" === typeof input[0] &&
      "function" === typeof input[1] &&
      "function" === typeof input[2]
    );
  };
  if (false === __is(input))
    ((
      input: any,
      _path: string,
      _exceptionable: boolean = true,
    ): input is FunctionalTuple => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $guard = require("typia/lib/functional/$guard").$guard(
        "typia.createAssert",
      );
      return (
        ((Array.isArray(input) ||
          $guard(true, {
            path: _path + "",
            expected: "FunctionalTuple",
            value: input,
          })) &&
          (input.length === 3 ||
            $guard(true, {
              path: _path + "",
              expected: "[unknown, unknown, unknown]",
              value: input,
            })) &&
          ("function" === typeof input[0] ||
            $guard(true, {
              path: _path + "[0]",
              expected: "unknown",
              value: input[0],
            })) &&
          ("function" === typeof input[1] ||
            $guard(true, {
              path: _path + "[1]",
              expected: "unknown",
              value: input[1],
            })) &&
          ("function" === typeof input[2] ||
            $guard(true, {
              path: _path + "[2]",
              expected: "unknown",
              value: input[2],
            }))) ||
        $guard(true, {
          path: _path + "",
          expected: "FunctionalTuple",
          value: input,
        })
      );
    })(input, "$input", true);
  return input;
});

import typia from "typia";

import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { FunctionalProperty } from "../../../structures/FunctionalProperty";

export const test_createAssertGuard_FunctionalProperty = _test_assertGuard(
  "FunctionalProperty",
)<FunctionalProperty>(FunctionalProperty)(
  (input: any): asserts input is FunctionalProperty => {
    const __is = (input: any): input is FunctionalProperty => {
      const $io0 = (input: any): boolean =>
        "string" === typeof input.name && "function" === typeof input.closure;
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is FunctionalProperty => {
        const $guard = (typia.createAssertGuard as any).guard;
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
          ("function" === typeof input.closure ||
            $guard(_exceptionable, {
              path: _path + ".closure",
              expected: "unknown",
              value: input.closure,
            }));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(true, {
              path: _path + "",
              expected: "FunctionalProperty",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "FunctionalProperty",
            value: input,
          })
        );
      })(input, "$input", true);
  },
);

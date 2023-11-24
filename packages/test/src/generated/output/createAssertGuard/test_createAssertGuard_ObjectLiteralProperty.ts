import typia from "typia";

import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_createAssertGuard_ObjectLiteralProperty = _test_assertGuard(
  "ObjectLiteralProperty",
)<ObjectLiteralProperty>(ObjectLiteralProperty)(
  (input: any): asserts input is ObjectLiteralProperty => {
    const __is = (input: any): input is ObjectLiteralProperty => {
      return (
        "object" === typeof input &&
        null !== input &&
        "string" ===
          typeof (input as any)["something-interesting-do-you-want?"] &&
        "string" === typeof (input as any)["or-something-crazy-do-you-want?"]
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectLiteralProperty => {
        const $guard = (typia.createAssertGuard as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("string" === typeof input["something-interesting-do-you-want?"] ||
            $guard(_exceptionable, {
              path: _path + '["something-interesting-do-you-want?"]',
              expected: "string",
              value: input["something-interesting-do-you-want?"],
            })) &&
          ("string" === typeof input["or-something-crazy-do-you-want?"] ||
            $guard(_exceptionable, {
              path: _path + '["or-something-crazy-do-you-want?"]',
              expected: "string",
              value: input["or-something-crazy-do-you-want?"],
            }));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(true, {
              path: _path + "",
              expected: "ObjectLiteralProperty.ISomething",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "ObjectLiteralProperty.ISomething",
            value: input,
          })
        );
      })(input, "$input", true);
  },
);

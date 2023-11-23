import typia from "typia";

import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_misc_createAssertClone_ObjectLiteralProperty =
  _test_misc_assertClone("ObjectLiteralProperty")<ObjectLiteralProperty>(
    ObjectLiteralProperty,
  )((input: any): typia.Resolved<ObjectLiteralProperty> => {
    const assert = (input: any): ObjectLiteralProperty => {
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
          const $guard = (typia.misc.createAssertClone as any).guard;
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
      return input;
    };
    const clone = (
      input: ObjectLiteralProperty,
    ): typia.Resolved<ObjectLiteralProperty> => {
      const $co0 = (input: any): any => ({
        "something-interesting-do-you-want?": input[
          "something-interesting-do-you-want?"
        ] as any,
        "or-something-crazy-do-you-want?": input[
          "or-something-crazy-do-you-want?"
        ] as any,
      });
      return "object" === typeof input && null !== input
        ? $co0(input)
        : (input as any);
    };
    assert(input);
    const output = clone(input);
    return output;
  });

import typia from "typia";

import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_misc_isClone_ObjectLiteralProperty = _test_misc_isClone(
  "ObjectLiteralProperty",
)<ObjectLiteralProperty>(ObjectLiteralProperty)((input) =>
  ((input: any): typia.Resolved<ObjectLiteralProperty> | null => {
    const is = (input: any): input is ObjectLiteralProperty => {
      return (
        "object" === typeof input &&
        null !== input &&
        "string" ===
          typeof (input as any)["something-interesting-do-you-want?"] &&
        "string" === typeof (input as any)["or-something-crazy-do-you-want?"]
      );
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
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  })(input),
);

import typia from "typia";

import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_misc_createIsPrune_ObjectLiteralProperty = _test_misc_isPrune(
  "ObjectLiteralProperty",
)<ObjectLiteralProperty>(ObjectLiteralProperty)(
  (input: any): input is ObjectLiteralProperty => {
    const is = (input: any): input is ObjectLiteralProperty => {
      return (
        "object" === typeof input &&
        null !== input &&
        "string" ===
          typeof (input as any)["something-interesting-do-you-want?"] &&
        "string" === typeof (input as any)["or-something-crazy-do-you-want?"]
      );
    };
    const prune = (input: ObjectLiteralProperty): void => {
      const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if (
            "something-interesting-do-you-want?" === key ||
            "or-something-crazy-do-you-want?" === key
          )
            continue;
          delete input[key];
        }
      };
      if ("object" === typeof input && null !== input) $po0(input);
    };
    if (!is(input)) return false;
    prune(input);
    return true;
  },
);

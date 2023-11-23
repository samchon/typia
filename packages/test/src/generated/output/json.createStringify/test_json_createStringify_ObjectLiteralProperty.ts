import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_json_createStringify_ObjectLiteralProperty =
  _test_json_stringify("ObjectLiteralProperty")<ObjectLiteralProperty>(
    ObjectLiteralProperty,
  )((input: ObjectLiteralProperty): string => {
    const $string = (typia.json.createStringify as any).string;
    return `{"something-interesting-do-you-want?":${$string(
      (input as any)["something-interesting-do-you-want?"],
    )},"or-something-crazy-do-you-want?":${$string(
      (input as any)["or-something-crazy-do-you-want?"],
    )}}`;
  });

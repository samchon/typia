import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_json_createAssertStringify_ObjectLiteralType =
  _test_json_assertStringify("ObjectLiteralType")<ObjectLiteralType>(
    ObjectLiteralType,
  )(typia.json.createAssertStringify<ObjectLiteralType>());

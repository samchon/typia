import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_json_createAssertStringify_ObjectRecursive =
  _test_json_assertStringify("ObjectRecursive")<ObjectRecursive>(
    ObjectRecursive,
  )(typia.json.createAssertStringify<ObjectRecursive>());

import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_json_assertStringify_ObjectRecursive =
  _test_json_assertStringify("ObjectRecursive")<ObjectRecursive>(
    ObjectRecursive,
  )((input) => typia.json.assertStringify<ObjectRecursive>(input));

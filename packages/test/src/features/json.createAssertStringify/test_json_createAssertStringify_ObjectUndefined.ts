import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_json_createAssertStringify_ObjectUndefined =
  _test_json_assertStringify("ObjectUndefined")<ObjectUndefined>(
    ObjectUndefined,
  )(typia.json.createAssertStringify<ObjectUndefined>());

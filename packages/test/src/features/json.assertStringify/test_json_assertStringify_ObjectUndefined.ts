import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_json_assertStringify_ObjectUndefined =
  _test_json_assertStringify("ObjectUndefined")<ObjectUndefined>(
    ObjectUndefined,
  )((input) => typia.json.assertStringify<ObjectUndefined>(input));

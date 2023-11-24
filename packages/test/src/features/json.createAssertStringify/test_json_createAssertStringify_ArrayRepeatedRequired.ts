import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_json_createAssertStringify_ArrayRepeatedRequired =
  _test_json_assertStringify("ArrayRepeatedRequired")<ArrayRepeatedRequired>(
    ArrayRepeatedRequired,
  )(typia.json.createAssertStringify<ArrayRepeatedRequired>());

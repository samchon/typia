import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_json_createAssertParse_ArrayRepeatedNullable =
  _test_json_assertParse("ArrayRepeatedNullable")<ArrayRepeatedNullable>(
    ArrayRepeatedNullable,
  )(typia.json.createAssertParse<ArrayRepeatedNullable>());

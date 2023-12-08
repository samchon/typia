import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_json_createAssertParse_ArrayRepeatedRequired =
  _test_json_assertParse("ArrayRepeatedRequired")<ArrayRepeatedRequired>(
    ArrayRepeatedRequired,
  )(typia.json.createAssertParse<ArrayRepeatedRequired>());

import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_json_createAssertParse_ArrayRepeatedUnion =
  _test_json_assertParse("ArrayRepeatedUnion")<ArrayRepeatedUnion>(
    ArrayRepeatedUnion,
  )(typia.json.createAssertParse<ArrayRepeatedUnion>());

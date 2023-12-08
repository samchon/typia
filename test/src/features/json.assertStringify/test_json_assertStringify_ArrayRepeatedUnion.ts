import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_json_assertStringify_ArrayRepeatedUnion =
  _test_json_assertStringify("ArrayRepeatedUnion")<ArrayRepeatedUnion>(
    ArrayRepeatedUnion,
  )((input) => typia.json.assertStringify<ArrayRepeatedUnion>(input));

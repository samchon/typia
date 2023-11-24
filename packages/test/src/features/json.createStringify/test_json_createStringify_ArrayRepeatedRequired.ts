import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_json_createStringify_ArrayRepeatedRequired =
  _test_json_stringify("ArrayRepeatedRequired")<ArrayRepeatedRequired>(
    ArrayRepeatedRequired,
  )(typia.json.createStringify<ArrayRepeatedRequired>());

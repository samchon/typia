import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_json_isStringify_ArrayRepeatedRequired =
  _test_json_isStringify("ArrayRepeatedRequired")<ArrayRepeatedRequired>(
    ArrayRepeatedRequired,
  )((input) => typia.json.isStringify<ArrayRepeatedRequired>(input));

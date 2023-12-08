import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_json_validateParse_ArrayRepeatedRequired =
  _test_json_validateParse("ArrayRepeatedRequired")<ArrayRepeatedRequired>(
    ArrayRepeatedRequired,
  )((input) => typia.json.validateParse<ArrayRepeatedRequired>(input));

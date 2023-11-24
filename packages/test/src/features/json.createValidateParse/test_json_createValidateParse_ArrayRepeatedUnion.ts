import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_json_createValidateParse_ArrayRepeatedUnion =
  _test_json_validateParse("ArrayRepeatedUnion")<ArrayRepeatedUnion>(
    ArrayRepeatedUnion,
  )(typia.json.createValidateParse<ArrayRepeatedUnion>());

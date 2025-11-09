import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_json_validateParse_ArrayRepeatedUnion = (): void =>
  _test_json_validateParse("ArrayRepeatedUnion")<ArrayRepeatedUnion>(
    ArrayRepeatedUnion,
  )((input) => typia.json.validateParse<ArrayRepeatedUnion>(input));

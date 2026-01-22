import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_json_validateParse_ArrayRepeatedNullable = (): void =>
  _test_json_validateParse("ArrayRepeatedNullable")<ArrayRepeatedNullable>(
    ArrayRepeatedNullable,
  )((input) => typia.json.validateParse<ArrayRepeatedNullable>(input));

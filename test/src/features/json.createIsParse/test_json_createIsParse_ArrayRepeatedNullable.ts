import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_json_createIsParse_ArrayRepeatedNullable = (): void =>
  _test_json_isParse("ArrayRepeatedNullable")<ArrayRepeatedNullable>(
    ArrayRepeatedNullable,
  )(typia.json.createIsParse<ArrayRepeatedNullable>());

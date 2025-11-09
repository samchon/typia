import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_json_createIsStringify_ArrayRepeatedUnion = (): void =>
  _test_json_isStringify("ArrayRepeatedUnion")<ArrayRepeatedUnion>(
    ArrayRepeatedUnion,
  )(typia.json.createIsStringify<ArrayRepeatedUnion>());

import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_json_createValidateStringify_ArrayRepeatedUnion =
  _test_json_validateStringify("ArrayRepeatedUnion")<ArrayRepeatedUnion>(
    ArrayRepeatedUnion,
  )(typia.json.createValidateStringify<ArrayRepeatedUnion>());

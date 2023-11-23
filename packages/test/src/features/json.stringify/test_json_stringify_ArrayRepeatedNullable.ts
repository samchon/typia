import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_json_stringify_ArrayRepeatedNullable = _test_json_stringify(
  "ArrayRepeatedNullable",
)<ArrayRepeatedNullable>(ArrayRepeatedNullable)((input) =>
  typia.json.stringify<ArrayRepeatedNullable>(input),
);

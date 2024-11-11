import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_json_schemas_v3_1_ArrayRepeatedNullable = _test_json_schemas({
  version: "3.1",
  name: "ArrayRepeatedNullable",
})(typia.json.schemas<[ArrayRepeatedNullable], "3.1">());

import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_json_schemas_v3_0_ArrayRepeatedNullable = _test_json_schemas({
  version: "3.0",
  name: "ArrayRepeatedNullable",
})(typia.json.schemas<[ArrayRepeatedNullable], "3.0">());

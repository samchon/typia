import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_json_schema_v3_0_ArrayRepeatedNullable = _test_json_schema({
  version: "3.0",
  name: "ArrayRepeatedNullable",
})(typia.json.schema<ArrayRepeatedNullable, "3.0">());

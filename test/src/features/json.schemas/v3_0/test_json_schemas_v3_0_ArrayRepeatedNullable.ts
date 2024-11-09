import typia from "typia";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_ArrayRepeatedNullable = 
  _test_json_schemas({
    version: "3.0",
    name: "ArrayRepeatedNullable", 
  })(typia.json.schemas<[ArrayRepeatedNullable], "3.0">());
import typia from "typia";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_ArrayRepeatedNullable = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ArrayRepeatedNullable", 
  })(typia.json.schema<ArrayRepeatedNullable, "3.1">());
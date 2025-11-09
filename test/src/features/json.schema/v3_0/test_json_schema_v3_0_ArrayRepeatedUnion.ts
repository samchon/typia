import typia from "typia";
import { ArrayRepeatedUnion } from "../../../structures/ArrayRepeatedUnion";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_ArrayRepeatedUnion = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "ArrayRepeatedUnion", 
  })(typia.json.schema<ArrayRepeatedUnion, "3.0">());
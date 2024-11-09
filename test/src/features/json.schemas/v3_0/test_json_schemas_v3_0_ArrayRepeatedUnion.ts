import typia from "typia";
import { ArrayRepeatedUnion } from "../../../structures/ArrayRepeatedUnion";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_ArrayRepeatedUnion = 
  _test_json_schemas({
    version: "3.0",
    name: "ArrayRepeatedUnion", 
  })(typia.json.schemas<[ArrayRepeatedUnion], "3.0">());
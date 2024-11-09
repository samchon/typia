import typia from "typia";
import { ArrayRepeatedUnionWithTuple } from "../../../structures/ArrayRepeatedUnionWithTuple";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_ArrayRepeatedUnionWithTuple = 
  _test_json_schemas({
    version: "3.0",
    name: "ArrayRepeatedUnionWithTuple", 
  })(typia.json.schemas<[ArrayRepeatedUnionWithTuple], "3.0">());
import typia from "typia";
import { ArrayUnion } from "../../../structures/ArrayUnion";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_ArrayUnion = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ArrayUnion", 
  })(typia.json.schema<ArrayUnion, "3.1">());
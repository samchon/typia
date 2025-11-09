import typia from "typia";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_ArrayRepeatedRequired = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "ArrayRepeatedRequired", 
  })(typia.json.schema<ArrayRepeatedRequired, "3.0">());
import typia from "typia";
import { ArrayAny } from "../../../structures/ArrayAny";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_ArrayAny = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "ArrayAny", 
  })(typia.json.schema<ArrayAny, "3.0">());
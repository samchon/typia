import typia from "typia";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_DynamicUndefined = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "DynamicUndefined", 
  })(typia.json.schema<DynamicUndefined, "3.0">());
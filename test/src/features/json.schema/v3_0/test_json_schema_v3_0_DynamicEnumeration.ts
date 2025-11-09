import typia from "typia";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_DynamicEnumeration = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "DynamicEnumeration", 
  })(typia.json.schema<DynamicEnumeration, "3.0">());